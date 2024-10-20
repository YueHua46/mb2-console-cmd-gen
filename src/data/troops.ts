export interface Troop {
    culture: string;
    id: string;
    name: string;
}

export const troops: Troop[] = [
    // 阿塞莱部队
    { culture: '阿塞莱', id: 'aserai_mameluke_guard', name: '阿塞莱马穆鲁克护卫' },
    { culture: '阿塞莱', id: 'aserai_veteran_infantry', name: '阿塞莱老兵步兵' },
    { culture: '阿塞莱', id: 'aserai_master_archer', name: '阿塞莱大师级弓箭手' },
    { culture: '阿塞莱', id: 'aserai_infantry', name: '阿塞莱步兵' },
    { culture: '阿塞莱', id: 'aserai_archer', name: '阿塞莱弓箭手' },
    { culture: '阿塞莱', id: 'aserai_footman', name: '阿塞莱步行兵' },
    { culture: '阿塞莱', id: 'aserai_skirmisher', name: '阿塞莱散兵' },
    { culture: '阿塞莱', id: 'aserai_faris', name: '阿塞莱法里斯骑兵' },
    { culture: '阿塞莱', id: 'aserai_mameluke_cavalry', name: '阿塞莱马穆鲁克骑兵' },
    { culture: '阿塞莱', id: 'aserai_mameluke_regular', name: '阿塞莱马穆鲁克正规军' },
    { culture: '阿塞莱', id: 'aserai_mameluke_soldier', name: '阿塞莱马穆鲁克士兵' },
    { culture: '阿塞莱', id: 'aserai_militia_spearman', name: '阿塞莱民兵长矛兵' },
    { culture: '阿塞莱', id: 'aserai_militia_archer', name: '阿塞莱民兵弓箭手' },
    { culture: '阿塞莱', id: 'aserai_tribal_horseman', name: '阿塞莱部族骑兵' },

    // 斯特吉亚部队
    { culture: '斯特吉亚', id: 'sturgian_horse_raider', name: '斯特吉亚骑马袭击者' },
    { culture: '斯特吉亚', id: 'sturgian_veteran_warrior', name: '斯特吉亚老兵战士' },
    { culture: '斯特吉亚', id: 'sturgian_veteran_bowman', name: '斯特吉亚老兵弓箭手' },
    { culture: '斯特吉亚', id: 'sturgian_hardened_brigand', name: '斯特吉亚硬化强盗' },
    { culture: '斯特吉亚', id: 'sturgian_spearman', name: '斯特吉亚长矛兵' },
    { culture: '斯特吉亚', id: 'sturgian_archer', name: '斯特吉亚弓箭手' },
    { culture: '斯特吉亚', id: 'varyag', name: '瓦良格' },
    { culture: '斯特吉亚', id: 'sturgian_briggand', name: '斯特吉亚强盗' },
    { culture: '斯特吉亚', id: 'sturgian_hunter', name: '斯特吉亚猎人' },
    { culture: '斯特吉亚', id: 'sturgian_warrior_son', name: '斯特吉亚战士之子' },
    { culture: '斯特吉亚', id: 'sturgian_warrior', name: '斯特吉亚战士' },
    { culture: '斯特吉亚', id: 'sturgian_militia_spearman', name: '斯特吉亚民兵长矛兵' },
    { culture: '斯特吉亚', id: 'sturgian_militia_archer', name: '斯特吉亚民兵弓箭手' },
    { culture: '斯特吉亚', id: 'sturgian_recruit', name: '斯特吉亚新兵' },

    // 瓦兰迪亚部队
    { culture: '瓦兰迪亚', id: 'vlandian_champion', name: '瓦兰迪亚冠军骑士' },
    { culture: '瓦兰迪亚', id: 'vlandian_gallant', name: '瓦兰迪亚英勇骑士' },
    { culture: '瓦兰迪亚', id: 'vlandian_vanguard', name: '瓦兰迪亚先锋骑士' },
    { culture: '瓦兰迪亚', id: 'vlandian_light_cavalry', name: '瓦兰迪亚轻骑兵' },
    { culture: '瓦兰迪亚', id: 'vlandian_sharpshooter', name: '瓦兰迪亚神射手' },
    { culture: '瓦兰迪亚', id: 'vlandian_sergeant', name: '瓦兰迪亚军士' },
    { culture: '瓦兰迪亚', id: 'vlandian_billman', name: '瓦兰迪亚长柄刀兵' },
    { culture: '瓦兰迪亚', id: 'vlandian_infantry', name: '瓦兰迪亚步兵' },
    { culture: '瓦兰迪亚', id: 'vlandian_footman', name: '瓦兰迪亚步行兵' },
    { culture: '瓦兰迪亚', id: 'vlandian_voulgier', name: '瓦兰迪亚大刀兵' },
    { culture: '瓦兰迪亚', id: 'vlandian_crossbowman', name: '瓦兰迪亚弩手' },
    { culture: '瓦兰迪亚', id: 'vlandian_militia_spearman', name: '瓦兰迪亚民兵长矛兵' },
    { culture: '瓦兰迪亚', id: 'vlandian_militia_archer', name: '瓦兰迪亚民兵弓箭手' },
    { culture: '瓦兰迪亚', id: 'vlandian_recruit', name: '瓦兰迪亚新兵' },

    // 库赛特部队
    { culture: '库赛特', id: 'khuzait_heavy_lancer', name: '库赛特重装枪骑兵' },
    { culture: '库赛特', id: 'khuzait_heavy_horse_archer', name: '库赛特重装马弓手' },
    { culture: '库赛特', id: 'khuzait_darkhan', name: '库赛特达尔罕' },
    { culture: '库赛特', id: 'khuzait_marksman', name: '库赛特神射手' },
    { culture: '库赛特', id: 'khuzait_lancer', name: '库赛特枪骑兵' },
    { culture: '库赛特', id: 'khuzait_militia_spearman', name: '库赛特民兵长矛兵' },
    { culture: '库赛特', id: 'khuzait_militia_archer', name: '库赛特民兵弓箭手' },
    { culture: '库赛特', id: 'khuzait_spearman', name: '库赛特长矛兵' },
    { culture: '库赛特', id: 'khuzait_hunter', name: '库赛特猎人' },
    { culture: '库赛特', id: 'khuzait_nomad', name: '库赛特游牧民' },
    { culture: '库赛特', id: 'khuzait_khans_guard', name: '库赛特可汗卫士' },

    // 帝国部队
    { culture: '帝国', id: 'imperial_cataphract', name: '帝国铁甲骑兵' },
    { culture: '帝国', id: 'imperial_legionary', name: '帝国军团士兵' },
    { culture: '帝国', id: 'imperial_sergeant_crossbowman', name: '帝国军士弩手' },
    { culture: '帝国', id: 'imperial_crossbowman', name: '帝国弩手' },
    { culture: '帝国', id: 'imperial_veteran_infantryman', name: '帝国老兵步兵' },
    { culture: '帝国', id: 'imperial_veteran_archer', name: '帝国老兵弓箭手' },
    { culture: '帝国', id: 'imperial_trained_infantry', name: '帝国熟练步兵' },
    { culture: '帝国', id: 'imperial_trained_archer', name: '帝国熟练弓箭手' },
    { culture: '帝国', id: 'imperial_heavy_horseman', name: '帝国重骑兵' },
    { culture: '帝国', id: 'imperial_equite', name: '帝国骑士' },
    { culture: '帝国', id: 'imperial_infantryman', name: '帝国步兵' },
    { culture: '帝国', id: 'imperial_archer', name: '帝国弓箭手' },
    { culture: '帝国', id: 'imperial_militia_spearman', name: '帝国民兵长矛兵' },
    { culture: '帝国', id: 'imperial_militia_archer', name: '帝国民兵弓箭手' },
    { culture: '帝国', id: 'imperial_recruit', name: '帝国新兵' },

    // 巴旦尼亚部队
    { culture: '巴旦尼亚', id: 'battanian_wildling', name: '巴旦尼亚野性战士' },
    { culture: '巴旦尼亚', id: 'battanian_oathsworn', name: '巴旦尼亚誓言守卫' },
    { culture: '巴旦尼亚', id: 'battanian_picked_warrior', name: '巴旦尼亚精锐战士' },
    { culture: '巴旦尼亚', id: 'battanian_falxman', name: '巴旦尼亚长刀兵' },
    { culture: '巴旦尼亚', id: 'battanian_trained_warrior', name: '巴旦尼亚熟练战士' },
    { culture: '巴旦尼亚', id: 'battanian_skirmisher', name: '巴旦尼亚散兵' },
    { culture: '巴旦尼亚', id: 'battanian_highborn_warrior', name: '巴旦尼亚贵族战士' },
    { culture: '巴旦尼亚', id: 'battanian_militia_spearman', name: '巴旦尼亚民兵长矛兵' },
    { culture: '巴旦尼亚', id: 'battanian_militia_archer', name: '巴旦尼亚民兵弓箭手' },
    { culture: '巴旦尼亚', id: 'battanian_clanwarrior', name: '巴旦尼亚氏族战士' },
    { culture: '巴旦尼亚', id: 'battanian_volunteer', name: '巴旦尼亚志愿者' },

    // 强盗和其他部队
    { culture: '沙漠强盗', id: 'desert_bandits_bandit', name: '沙漠强盗' },
    { culture: '沙漠强盗', id: 'desert_bandits_raider', name: '沙漠袭击者' },
    { culture: '沙漠强盗', id: 'desert_bandits_chief', name: '沙漠强盗头目' },
    { culture: '沙漠强盗', id: 'desert_bandits_boss', name: '沙漠强盗首领' },

    { culture: '草原强盗', id: 'steppe_bandits_bandit', name: '草原强盗' },
    { culture: '草原强盗', id: 'steppe_bandits_raider', name: '草原袭击者' },
    { culture: '草原强盗', id: 'steppe_bandits_chief', name: '草原强盗头目' },
    { culture: '草原强盗', id: 'steppe_bandits_boss', name: '草原强盗首领' },

    { culture: '森林强盗', id: 'forest_bandits_bandit', name: '森林强盗' },
    { culture: '森林强盗', id: 'forest_bandits_raider', name: '森林袭击者' },
    { culture: '森林强盗', id: 'forest_bandits_chief', name: '森林强盗头目' },
    { culture: '森林强盗', id: 'forest_bandits_boss', name: '森林强盗首领' },

    { culture: '山贼', id: 'mountain_bandits_bandit', name: '山贼' },
    { culture: '山贼', id: 'mountain_bandits_raider', name: '山地袭击者' },
    { culture: '山贼', id: 'mountain_bandits_chief', name: '山贼头目' },
    { culture: '山贼', id: 'mountain_bandits_boss', name: '山贼首领' },

    { culture: '海寇', id: 'sea_raider_bandit', name: '海寇' },
    { culture: '海寇', id: 'sea_raiders_raider', name: '海袭者' },
    { culture: '海寇', id: 'sea_raiders_chief', name: '海寇头目' },
    { culture: '海寇', id: 'sea_raiders_boss', name: '海寇首领' },
];

// 定义可用的文化列表
export const cultures = Array.from(new Set(troops.map(troop => troop.culture)));

// 定义商队护卫部队，根据文化动态生成
cultures.forEach(culture => {
    troops.push(
        { culture, id: `armed_trader_${culture.toLowerCase()}`, name: `${culture}武装商人` },
        { culture, id: `caravan_guard_${culture.toLowerCase()}`, name: `${culture}商队护卫` },
        { culture, id: `veteran_caravan_guard_${culture.toLowerCase()}`, name: `${culture}老兵商队护卫` },
        { culture, id: `caravan_master_${culture.toLowerCase()}`, name: `${culture}商队长` },
    );
});