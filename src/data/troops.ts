export interface Troop {
    culture: string;
    id: string;
}

export const troops: Troop[] = [
    // 阿塞莱部队
    { culture: 'aserai', id: 'aserai_mameluke_guard', },
    { culture: 'aserai', id: 'aserai_veteran_infantry', },
    { culture: 'aserai', id: 'aserai_master_archer', },
    { culture: 'aserai', id: 'aserai_infantry', },
    { culture: 'aserai', id: 'aserai_archer', },
    { culture: 'aserai', id: 'aserai_footman', },
    { culture: 'aserai', id: 'aserai_skirmisher', },
    { culture: 'aserai', id: 'aserai_faris', },
    { culture: 'aserai', id: 'aserai_mameluke_cavalry', },
    { culture: 'aserai', id: 'aserai_mameluke_regular', },
    { culture: 'aserai', id: 'aserai_mameluke_soldier', },
    { culture: 'aserai', id: 'aserai_militia_spearman', },
    { culture: 'aserai', id: 'aserai_militia_archer', },
    { culture: 'aserai', id: 'aserai_tribal_horseman', },
    { culture: 'aserai', id: 'aserai_vanguard_faris', },

    // 斯特吉亚部队
    { culture: 'sturgian', id: 'sturgian_horse_raider', },
    { culture: 'sturgian', id: 'sturgian_veteran_warrior', },
    { culture: 'sturgian', id: 'sturgian_veteran_bowman', },
    { culture: 'sturgian', id: 'sturgian_hardened_brigand', },
    { culture: 'sturgian', id: 'sturgian_spearman', },
    { culture: 'sturgian', id: 'sturgian_archer', },
    { culture: 'sturgian', id: 'varyag', },
    { culture: 'sturgian', id: 'sturgian_briggand', },
    { culture: 'sturgian', id: 'sturgian_hunter', },
    { culture: 'sturgian', id: 'sturgian_warrior_son', },
    { culture: 'sturgian', id: 'sturgian_warrior', },
    { culture: 'sturgian', id: 'sturgian_militia_spearman', },
    { culture: 'sturgian', id: 'sturgian_militia_archer', },
    { culture: 'sturgian', id: 'sturgian_recruit', },

    // 瓦兰迪亚部队
    { culture: 'vlandian', id: 'vlandian_champion', },
    { culture: 'vlandian', id: 'vlandian_gallant', },
    { culture: 'vlandian', id: 'vlandian_vanguard', },
    { culture: 'vlandian', id: 'vlandian_light_cavalry', },
    { culture: 'vlandian', id: 'vlandian_sharpshooter', },
    { culture: 'vlandian', id: 'vlandian_sergeant', },
    { culture: 'vlandian', id: 'vlandian_billman', },
    { culture: 'vlandian', id: 'vlandian_infantry', },
    { culture: 'vlandian', id: 'vlandian_footman', },
    { culture: 'vlandian', id: 'vlandian_voulgier', },
    { culture: 'vlandian', id: 'vlandian_crossbowman', },
    { culture: 'vlandian', id: 'vlandian_militia_spearman', },
    { culture: 'vlandian', id: 'vlandian_militia_archer', },
    { culture: 'vlandian', id: 'vlandian_recruit', },

    // 库赛特部队
    { culture: 'khuzait', id: 'khuzait_heavy_lancer', },
    { culture: 'khuzait', id: 'khuzait_heavy_horse_archer', },
    { culture: 'khuzait', id: 'khuzait_darkhan', },
    { culture: 'khuzait', id: 'khuzait_marksman', },
    { culture: 'khuzait', id: 'khuzait_lancer', },
    { culture: 'khuzait', id: 'khuzait_militia_spearman', },
    { culture: 'khuzait', id: 'khuzait_militia_archer', },
    { culture: 'khuzait', id: 'khuzait_spearman', },
    { culture: 'khuzait', id: 'khuzait_hunter', },
    { culture: 'khuzait', id: 'khuzait_nomad', },
    { culture: 'khuzait', id: 'khuzait_khans_guard', },

    // 帝国部队
    { culture: 'imperial', id: 'imperial_elite_cataphract', },
    { culture: 'imperial', id: 'imperial_cataphract', },
    { culture: 'imperial', id: 'imperial_legionary', },
    { culture: 'imperial', id: 'imperial_sergeant_crossbowman', },
    { culture: 'imperial', id: 'imperial_crossbowman', },
    { culture: 'imperial', id: 'imperial_veteran_infantryman', },
    { culture: 'imperial', id: 'imperial_veteran_archer', },
    { culture: 'imperial', id: 'imperial_trained_infantry', },
    { culture: 'imperial', id: 'imperial_trained_archer', },
    { culture: 'imperial', id: 'imperial_heavy_horseman', },
    { culture: 'imperial', id: 'imperial_equite', },
    { culture: 'imperial', id: 'imperial_infantryman', },
    { culture: 'imperial', id: 'imperial_archer', },
    { culture: 'imperial', id: 'imperial_militia_spearman', },
    { culture: 'imperial', id: 'imperial_militia_archer', },
    { culture: 'imperial', id: 'imperial_recruit', },

    // 巴旦尼亚部队
    { culture: 'battanian', id: 'battanian_wildling', },
    { culture: 'battanian', id: 'battanian_oathsworn', },
    { culture: 'battanian', id: 'battanian_picked_warrior', },
    { culture: 'battanian', id: 'battanian_falxman', },
    { culture: 'battanian', id: 'battanian_trained_warrior', },
    { culture: 'battanian', id: 'battanian_skirmisher', },
    { culture: 'battanian', id: 'battanian_highborn_warrior', },
    { culture: 'battanian', id: 'battanian_militia_spearman', },
    { culture: 'battanian', id: 'battanian_militia_archer', },
    { culture: 'battanian', id: 'battanian_clanwarrior', },
    { culture: 'battanian', id: 'battanian_volunteer', },
    { culture: 'battanian', id: 'battanian_fian_champion', },
    { culture: 'battanian', id: 'battanian_fian', },

    // 强盗和其他部队
    { culture: 'desert', id: 'desert_bandits_bandit', },
    { culture: 'desert', id: 'desert_bandits_raider', },
    { culture: 'desert', id: 'desert_bandits_chief', },
    { culture: 'desert', id: 'desert_bandits_boss', },

    { culture: 'steppe', id: 'steppe_bandits_bandit', },
    { culture: 'steppe', id: 'steppe_bandits_raider', },
    { culture: 'steppe', id: 'steppe_bandits_chief', },
    { culture: 'steppe', id: 'steppe_bandits_boss', },

    { culture: 'forest', id: 'forest_bandits_bandit', },
    { culture: 'forest', id: 'forest_bandits_raider', },
    { culture: 'forest', id: 'forest_bandits_chief', },
    { culture: 'forest', id: 'forest_bandits_boss', },

    { culture: 'mountain', id: 'mountain_bandits_bandit', },
    { culture: 'mountain', id: 'mountain_bandits_raider', },
    { culture: 'mountain', id: 'mountain_bandits_chief', },
    { culture: 'mountain', id: 'mountain_bandits_boss', },

    { culture: 'sea', id: 'sea_raider_bandit', },
    { culture: 'sea', id: 'sea_raiders_raider', },
    { culture: 'sea', id: 'sea_raiders_chief', },
    { culture: 'sea', id: 'sea_raiders_boss', },
];

// 定义可用的文化列表
export const cultures = Array.from(new Set(troops.map(troop => troop.culture)));