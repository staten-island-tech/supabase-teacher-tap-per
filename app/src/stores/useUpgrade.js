import { ref } from 'vue'
import { supabase } from '../clients/supabase'
import { defineStore } from 'pinia'
import { useAuthStore } from '@/stores/useAuth'
import { useCounterStore } from './counter'

export const useUpgradeStore = defineStore('upgrades', () => {
  const auth = useAuthStore()
  const counterStore = useCounterStore()

  const upgrades = ref([
    { name: 'Barone', adds: 1, cost: 1, count: 0, upgrades: 0, image: 'BaroneAlison.jpg' },
    { name: 'Colangelo', adds: 2, cost: 10, count: 0, upgrades: 0, image: 'ColangeloJonathan.jpg' },
    { name: 'Frusci', adds: 5, cost: 100, count: 0, upgrades: 0, image: 'FrusciJoseph.jpg' },
    { name: 'Partnow', adds: 10, cost: 500, count: 0, upgrades: 0, image: 'Partnow.jpg' },
    { name: 'Nickolauk', adds: 25, cost: 1000, count: 0, upgrades: 0, image: 'Nick.png' },
    {
      name: 'Amoroso',
      adds: 50,
      cost: 5000,
      count: 0,
      upgrades: 0,
      image: 'https://via.placeholder.com/40',
    },
    { name: 'Whalen', adds: 100, cost: 15000, count: 0, upgrades: 0, image: 'WhalenMichael.jpg' },
  ])

  function canBuyUpgrade(upgrade) {
    return counterStore.grade >= upgrade.cost
  }

  async function loadUpgrades() {
    if (!auth.user) return

    const { data, error } = await supabase
      .from('player_upgrades')
      .select('name, count, upgrades, cost')
      .eq('user_id', auth.user.id)

    if (error) {
      console.error('Error loading upgrades:', error.message)
      return
    }

    upgrades.value = upgrades.value.map((up) => {
      const match = data.find((d) => d.name === up.name)
      return match ? { ...up, count: match.count, upgrades: match.upgrades, cost: match.cost } : up
    })
  }

  async function upgradeButton(x) {
    if (!canBuyUpgrade(x)) {
      console.warn('Not enough grade to buy upgrade')
      return
    }

    x.cost = Math.round(x.cost * 1.08 * 100) / 100
    x.count += 1
    x.upgrades += x.adds
    counterStore.click += x.adds

    const { data, error } = await supabase
      .from('player_upgrades')
      .upsert(
        {
          user_id: auth.user.id,
          name: x.name,
          count: x.count,
          upgrades: x.upgrades,
          cost: x.cost,
        },
        {
          onConflict: ['user_id', 'name'],
        },
      )
      .select()

    if (error) {
      console.error('Save failed:', error.message)
    } else {
      console.log('Upsert success:', data)
    }
  }

  return { upgrades, loadUpgrades, upgradeButton, canBuyUpgrade }
})
