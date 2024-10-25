export interface Troop {
    culture: string;
    id: string;
}

export const troops: Troop[] = [
    // 阿塞莱部队
    { culture: 'culture.aserai', id: 'troops.aserai_mameluke_guard', },
    { culture: 'culture.aserai', id: 'troops.aserai_veteran_infantry', },
    { culture: 'culture.aserai', id: 'troops.aserai_master_archer', },
    { culture: 'culture.aserai', id: 'troops.aserai_infantry', },
    { culture: 'culture.aserai', id: 'troops.aserai_archer', },
    { culture: 'culture.aserai', id: 'troops.aserai_footman', },
    { culture: 'culture.aserai', id: 'troops.aserai_skirmisher', },
    { culture: 'culture.aserai', id: 'troops.aserai_faris', },
    { culture: 'culture.aserai', id: 'troops.aserai_mameluke_cavalry', },
    { culture: 'culture.aserai', id: 'troops.aserai_mameluke_regular', },
    { culture: 'culture.aserai', id: 'troops.aserai_mameluke_soldier', },
    { culture: 'culture.aserai', id: 'troops.aserai_militia_spearman', },
    { culture: 'culture.aserai', id: 'troops.aserai_militia_archer', },
    { culture: 'culture.aserai', id: 'troops.aserai_tribal_horseman', },
    { culture: 'culture.aserai', id: 'troops.aserai_vanguard_faris', },

    // 斯特吉亚部队
    { culture: 'culture.sturgian', id: 'troops.sturgian_horse_raider', },
    { culture: 'culture.sturgian', id: 'troops.sturgian_veteran_warrior', },
    { culture: 'culture.sturgian', id: 'troops.sturgian_veteran_bowman', },
    { culture: 'culture.sturgian', id: 'troops.sturgian_hardened_brigand', },
    { culture: 'culture.sturgian', id: 'troops.sturgian_spearman', },
    { culture: 'culture.sturgian', id: 'troops.sturgian_archer', },
    { culture: 'culture.sturgian', id: 'troops.varyag', },
    { culture: 'culture.sturgian', id: 'troops.sturgian_briggand', },
    { culture: 'culture.sturgian', id: 'troops.sturgian_hunter', },
    { culture: 'culture.sturgian', id: 'troops.sturgian_warrior_son', },
    { culture: 'culture.sturgian', id: 'troops.sturgian_warrior', },
    { culture: 'culture.sturgian', id: 'troops.sturgian_militia_spearman', },
    { culture: 'culture.sturgian', id: 'troops.sturgian_militia_archer', },
    { culture: 'culture.sturgian', id: 'troops.sturgian_recruit', },

    // 瓦兰迪亚部队
    { culture: 'culture.vlandian', id: 'troops.vlandian_champion', },
    { culture: 'culture.vlandian', id: 'troops.vlandian_gallant', },
    { culture: 'culture.vlandian', id: 'troops.vlandian_vanguard', },
    { culture: 'culture.vlandian', id: 'troops.vlandian_light_cavalry', },
    { culture: 'culture.vlandian', id: 'troops.vlandian_sharpshooter', },
    { culture: 'culture.vlandian', id: 'troops.vlandian_sergeant', },
    { culture: 'culture.vlandian', id: 'troops.vlandian_billman', },
    { culture: 'culture.vlandian', id: 'troops.vlandian_infantry', },
    { culture: 'culture.vlandian', id: 'troops.vlandian_footman', },
    { culture: 'culture.vlandian', id: 'troops.vlandian_voulgier', },
    { culture: 'culture.vlandian', id: 'troops.vlandian_crossbowman', },
    { culture: 'culture.vlandian', id: 'troops.vlandian_militia_spearman', },
    { culture: 'culture.vlandian', id: 'troops.vlandian_militia_archer', },
    { culture: 'culture.vlandian', id: 'troops.vlandian_recruit', },

    // 库赛特部队
    { culture: 'culture.khuzait', id: 'troops.khuzait_heavy_lancer', },
    { culture: 'culture.khuzait', id: 'troops.khuzait_heavy_horse_archer', },
    { culture: 'culture.khuzait', id: 'troops.khuzait_darkhan', },
    { culture: 'culture.khuzait', id: 'troops.khuzait_marksman', },
    { culture: 'culture.khuzait', id: 'troops.khuzait_lancer', },
    { culture: 'culture.khuzait', id: 'troops.khuzait_militia_spearman', },
    { culture: 'culture.khuzait', id: 'troops.khuzait_militia_archer', },
    { culture: 'culture.khuzait', id: 'troops.khuzait_spearman', },
    { culture: 'culture.khuzait', id: 'troops.khuzait_hunter', },
    { culture: 'culture.khuzait', id: 'troops.khuzait_nomad', },
    { culture: 'culture.khuzait', id: 'troops.khuzait_khans_guard', },

    // 帝国部队
    { culture: 'culture.imperial', id: 'troops.imperial_elite_cataphract', },
    { culture: 'culture.imperial', id: 'troops.imperial_cataphract', },
    { culture: 'culture.imperial', id: 'troops.imperial_legionary', },
    { culture: 'culture.imperial', id: 'troops.imperial_sergeant_crossbowman', },
    { culture: 'culture.imperial', id: 'troops.imperial_crossbowman', },
    { culture: 'culture.imperial', id: 'troops.imperial_veteran_infantryman', },
    { culture: 'culture.imperial', id: 'troops.imperial_veteran_archer', },
    { culture: 'culture.imperial', id: 'troops.imperial_trained_infantry', },
    { culture: 'culture.imperial', id: 'troops.imperial_trained_archer', },
    { culture: 'culture.imperial', id: 'troops.imperial_heavy_horseman', },
    { culture: 'culture.imperial', id: 'troops.imperial_equite', },
    { culture: 'culture.imperial', id: 'troops.imperial_infantryman', },
    { culture: 'culture.imperial', id: 'troops.imperial_archer', },
    { culture: 'culture.imperial', id: 'troops.imperial_militia_spearman', },
    { culture: 'culture.imperial', id: 'troops.imperial_militia_archer', },
    { culture: 'culture.imperial', id: 'troops.imperial_recruit', },

    // 巴旦尼亚部队
    { culture: 'culture.battanian', id: 'troops.battanian_wildling', },
    { culture: 'culture.battanian', id: 'troops.battanian_oathsworn', },
    { culture: 'culture.battanian', id: 'troops.battanian_picked_warrior', },
    { culture: 'culture.battanian', id: 'troops.battanian_falxman', },
    { culture: 'culture.battanian', id: 'troops.battanian_trained_warrior', },
    { culture: 'culture.battanian', id: 'troops.battanian_skirmisher', },
    { culture: 'culture.battanian', id: 'troops.battanian_highborn_warrior', },
    { culture: 'culture.battanian', id: 'troops.battanian_militia_spearman', },
    { culture: 'culture.battanian', id: 'troops.battanian_militia_archer', },
    { culture: 'culture.battanian', id: 'troops.battanian_clanwarrior', },
    { culture: 'culture.battanian', id: 'troops.battanian_volunteer', },
    { culture: 'culture.battanian', id: 'troops.battanian_fian_champion', },
    { culture: 'culture.battanian', id: 'troops.battanian_fian', },

    // 强盗和其他部队
    { culture: 'culture.desert_bandits', id: 'troops.desert_bandits_bandit', },
    { culture: 'culture.desert_bandits', id: 'troops.desert_bandits_raider', },
    { culture: 'culture.desert_bandits', id: 'troops.desert_bandits_chief', },
    { culture: 'culture.desert_bandits', id: 'troops.desert_bandits_boss', },

    { culture: 'culture.steppe_bandits', id: 'troops.steppe_bandits_bandit', },
    { culture: 'culture.steppe_bandits', id: 'troops.steppe_bandits_raider', },
    { culture: 'culture.steppe_bandits', id: 'troops.steppe_bandits_chief', },
    { culture: 'culture.steppe_bandits', id: 'troops.steppe_bandits_boss', },

    { culture: 'culture.forest_bandits', id: 'troops.forest_bandits_bandit', },
    { culture: 'culture.forest_bandits', id: 'troops.forest_bandits_raider', },
    { culture: 'culture.forest_bandits', id: 'troops.forest_bandits_chief', },
    { culture: 'culture.forest_bandits', id: 'troops.forest_bandits_boss', },

    { culture: 'culture.mountain_bandits', id: 'troops.mountain_bandits_bandit', },
    { culture: 'culture.mountain_bandits', id: 'troops.mountain_bandits_raider', },
    { culture: 'culture.mountain_bandits', id: 'troops.mountain_bandits_chief', },
    { culture: 'culture.mountain_bandits', id: 'troops.mountain_bandits_boss', },

    { culture: 'culture.sea_raiders', id: 'troops.sea_raider_bandit', },
    { culture: 'culture.sea_raiders', id: 'troops.sea_raiders_raider', },
    { culture: 'culture.sea_raiders', id: 'troops.sea_raiders_chief', },
    { culture: 'culture.sea_raiders', id: 'troops.sea_raiders_boss', },
];

// 定义可用的文化列表
export const cultures = Array.from(new Set(troops.map(troop => troop.culture)));