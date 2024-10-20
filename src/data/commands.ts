// src/data/commands.ts

import { troops } from "./troops";

export interface Command {
    name: string;
    code: string;
    description: string;
    params?: { key: string; default?: string; label?: string; type?: string; options?: { value: string; label: string }[] }[];
}

export interface Category {
    name: string;
    commands: Command[];
}

export const categories: Category[] = [
    {
        name: '控制台设置',
        commands: [
            {
                name: '打开控制台',
                code: '按下 Alt + ~',
                description: '默认的快捷键，打开控制台界面。',
            },
            {
                name: '启用作弊模式',
                code: 'config.cheat_mode 1',
                description: '在控制台中启用作弊模式，无需重启游戏。',
            },
            {
                name: '禁用作弊模式',
                code: 'config.cheat_mode 0',
                description: '在控制台中禁用作弊模式，无需重启游戏。',
            },
        ],
    },
    {
        name: '地图命令',
        commands: [
            {
                name: '地图传送',
                code: '按住 CTRL 并左键点击地图',
                description: '按住 CTRL 的同时左键点击地图，可将你传送到任意位置。',
            },
            {
                name: '显示地图上所有的部队',
                code: 'campaign.set_armies_and_parties_visible 1',
                description: '在地图上显示所有部队，前提是你第一次看到过这个队伍，否则将无法正常显示，通过将1 变为 0 代表关闭显示地图上所有部队',
            },
        ],
    },
    {
        name: '战斗命令',
        commands: [
            {
                name: '治疗自己',
                code: 'CTRL + H',
                description: '在战斗中将自己治疗至100%生命值。',
            },
            {
                name: '治疗马匹',
                code: 'CTRL + Shift + H',
                description: '在战斗中将你的马治疗至满血。',
            },
            {
                name: '击倒一个敌人',
                code: 'CTRL + F4',
                description: '在战场上击倒一个敌人。',
            },
            {
                name: '击倒所有敌人',
                code: 'CTRL + ALT + F4',
                description: '在战场上击倒所有敌人。',
            },
            {
                name: '击倒一个友军',
                code: 'CTRL + F2',
                description: '在战场上击倒你的一名士兵。',
            },
            {
                name: '击倒所有友军',
                code: 'CTRL + ALT + F2',
                description: '在战场上击倒你所有的士兵。',
            },
            {
                name: '击倒自己',
                code: 'CTRL + F3',
                description: '在战场上击倒自己。',
            },
        ],
    },
    {
        name: '增加金币、技能点、关系等命令',
        commands: [
            {
                name: '添加金币',
                code: 'campaign.add_gold_to_hero {hero_name} | {amount}',
                description: '为指定英雄添加指定数量的金币。',
                params: [
                    { key: 'hero_name', default: '', label: '英雄名称（省略为空时为自己）' },
                    { key: 'amount', default: '50000', label: '金币数量' },
                ],
            },
            {
                name: '为所有人添加金币',
                code: 'campaign.add_gold_to_all_heroes {amount}',
                description: '为所有人添加指定数量的金币。',
                params: [
                    { key: 'amount', default: '50000', label: '金币数量' },
                ],
            },
            {
                name: '增加影响力',
                code: 'campaign.add_influence {amount}',
                description: '增加主角指定数量的影响力。',
                params: [
                    { key: 'amount', default: '100', label: '影响力数量' },
                ],
            },
            {
                name: '增加声望',
                code: 'campaign.add_renown_to_clan {clan_name} | {amount}',
                description: '为指定家族增加指定数量的声望。',
                params: [
                    { key: 'clan_name', default: '', label: '家族名称（省略为空时为自己家族）' },
                    { key: 'amount', default: '500', label: '声望数量' },
                ],
            },
            {
                name: '增加专精点',
                code: 'campaign.add_focus_points_to_hero {hero_name} | {amount}',
                description: '为指定英雄增加指定数量的专精点。',
                params: [
                    { key: 'hero_name', default: '', label: '英雄名称（省略为空时为自己）' },
                    { key: 'amount', default: '30', label: '专精点数量' },
                ],
            },
            {
                name: '增加属性点',
                code: 'campaign.add_attribute_points_to_hero {hero_name} | {amount}',
                description: '为指定英雄增加指定数量的属性点。',
                params: [
                    { key: 'hero_name', default: '', label: '英雄名称（省略为空时为自己）' },
                    { key: 'amount', default: '30', label: '属性点数量' },
                ],
            },
            {
                name: '主队伍经验值',
                code: 'campaign.add_troops_xp {amount}',
                description: '为主队伍增加指定数量的经验值（对英雄单位不会生效）',
                params: [
                    { key: 'amount', default: '999', label: '经验值数量' },
                ],
            },
            {
                name: '增加与指定英雄的关系',
                code: 'campaign.add_hero_relation {hero_name} | {amount}',
                description: '增加主角与指定英雄的关系。',
                params: [
                    { key: 'hero_name', default: '', label: '英雄名称（不得为空）' },
                    { key: 'amount', default: '100', label: '关系数量' },
                ],
            },
            {
                name: '增加与所有英雄的关系',
                code: 'campaign.add_hero_relation ALL | {amount}',
                description: '增加主角与所有英雄的关系。',
                params: [
                    { key: 'amount', default: '100', label: '关系数量' },
                ],
            }
        ],
    },
    {
        name: '技能命令',
        commands: [
            {
                name: '增加双手武器技能经验',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | TwoHanded | {amount}',
                description: '为指定英雄的双手武器技能增加经验值。',
                params: [
                    { key: 'hero_name', default: '', label: '英雄名称（省略为空时为自己）' },
                    { key: 'amount', default: '99999', label: '经验值数量' },
                ],
            },
            {
                name: '增加单手武器技能经验',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | OneHanded | {amount}',
                description: '为指定英雄的单手武器技能增加经验值。',
                params: [
                    { key: 'hero_name', default: '', label: '英雄名称（省略为空时为自己）' },
                    { key: 'amount', default: '99999', label: '经验值数量' },
                ],
            },
            {
                name: '增加跑动技能经验',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Athletics | {amount}',
                description: '为指定英雄的跑动技能增加经验值。',
                params: [
                    { key: 'hero_name', default: '', label: '英雄名称（省略为空时为自己）' },
                    { key: 'amount', default: '99999', label: '经验值数量' },
                ],
            },
            {
                name: '增加投掷技能经验',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Throwing | {amount}',
                description: '为指定英雄的投掷技能增加经验值。',
                params: [
                    { key: 'hero_name', default: '', label: '英雄名称（省略为空时为自己）' },
                    { key: 'amount', default: '99999', label: '经验值数量' },
                ],
            },
            {
                name: '增加骑术技能经验',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Riding | {amount}',
                description: '为指定英雄的骑术技能增加经验值。',
                params: [
                    { key: 'hero_name', default: '', label: '英雄名称（省略为空时为自己）' },
                    { key: 'amount', default: '99999', label: '经验值数量' },
                ],
            },
            {
                name: '增加弓箭技能经验',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Bow | {amount}',
                description: '为指定英雄的弓箭技能增加经验值。',
                params: [
                    { key: 'hero_name', default: '', label: '英雄名称（省略为空时为自己）' },
                    { key: 'amount', default: '99999', label: '经验值数量' },
                ],
            },
            {
                name: '增加长杆武器技能经验',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Polearm | {amount}',
                description: '为指定英雄的长杆武器技能增加经验值。',
                params: [
                    { key: 'hero_name', default: '', label: '英雄名称（省略为空时为自己）' },
                    { key: 'amount', default: '99999', label: '经验值数量' },
                ],
            },
            {
                name: '增加弩箭技能经验',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Crossbow | {amount}',
                description: '为指定英雄的弩箭技能增加经验值。',
                params: [
                    { key: 'hero_name', default: '', label: '英雄名称（省略为空时为自己）' },
                    { key: 'amount', default: '99999', label: '经验值数量' },
                ],
            },
            {
                name: '增加锻造技能经验',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Smithing | {amount}',
                description: '为指定英雄的锻造技能增加经验值。',
                params: [
                    { key: 'hero_name', default: '', label: '英雄名称（省略为空时为自己）' },
                    { key: 'amount', default: '99999', label: '经验值数量' },
                ],
            },
            {
                name: '增加流氓技能经验',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Roguery | {amount}',
                description: '为指定英雄的流氓技能增加经验值。',
                params: [
                    { key: 'hero_name', default: '', label: '英雄名称（省略为空时为自己）' },
                    { key: 'amount', default: '99999', label: '经验值数量' },
                ],
            },
            {
                name: '增加战术技能经验',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Tactics | {amount}',
                description: '为指定英雄的战术技能增加经验值。',
                params: [
                    { key: 'hero_name', default: '', label: '英雄名称（省略为空时为自己）' },
                    { key: 'amount', default: '99999', label: '经验值数量' },
                ],
            },
            {
                name: '增加侦察技能经验',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Scouting | {amount}',
                description: '为指定英雄的侦察技能增加经验值。',
                params: [
                    { key: 'hero_name', default: '', label: '英雄名称（省略为空时为自己）' },
                    { key: 'amount', default: '99999', label: '经验值数量' },
                ],
            },
            {
                name: '增加魅力技能经验',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Charm | {amount}',
                description: '为指定英雄的魅力技能增加经验值。',
                params: [
                    { key: 'hero_name', default: '', label: '英雄名称（省略为空时为自己）' },
                    { key: 'amount', default: '99999', label: '经验值数量' },
                ],
            },
            {
                name: '增加统御技能经验',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Leadership | {amount}',
                description: '为指定英雄的统御技能增加经验值。',
                params: [
                    { key: 'hero_name', default: '', label: '英雄名称（省略为空时为自己）' },
                    { key: 'amount', default: '99999', label: '经验值数量' },
                ],
            },
            {
                name: '增加交易技能经验',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Trade | {amount}',
                description: '为指定英雄的交易技能增加经验值。',
                params: [
                    { key: 'hero_name', default: '', label: '英雄名称（省略为空时为自己）' },
                    { key: 'amount', default: '99999', label: '经验值数量' },
                ],
            },
            {
                name: '增加管理技能经验',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Steward | {amount}',
                description: '为指定英雄的管理技能增加经验值。',
                params: [
                    { key: 'hero_name', default: '', label: '英雄名称（省略为空时为自己）' },
                    { key: 'amount', default: '99999', label: '经验值数量' },
                ],
            },
            {
                name: '增加医疗技能经验',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Medicine | {amount}',
                description: '为指定英雄的医疗技能增加经验值。',
                params: [
                    { key: 'hero_name', default: '', label: '英雄名称（省略为空时为自己）' },
                    { key: 'amount', default: '99999', label: '经验值数量' },
                ],
            },
            {
                name: '增加工程学技能经验',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Engineering | {amount}',
                description: '为指定英雄的工程学技能增加经验值。',
                params: [
                    { key: 'hero_name', default: '', label: '英雄名称（省略为空时为自己）' },
                    { key: 'amount', default: '99999', label: '经验值数量' },
                ],
            },
        ],
    },
    {
        name: "物品命令",
        commands: [
            {
                name: "给予主要队伍所有锻造材料指定数量",
                code: "campaign.give_all_crafting_materials_to_main_party {amount}",
                description: "给予主要队伍所有锻造材料指定数量。",
                params: [
                    { key: 'amount', default: '1000', label: '数量' },
                ],
            }
        ]
    },
    {
        name: '队伍命令',
        commands: [
            {
                name: '添加部队',
                code: 'campaign.add_troops {troop_id} | {amount} | {party_name}',
                description: '向你的队伍中添加指定的部队。',
                params: [
                    {
                        key: 'troop_id',
                        label: '部队名称',
                        type: 'select',
                        options: troops.map(troop => ({ value: troop.id, label: troop.name })), // 在组件中根据这个选项生成下拉菜单
                    },
                    { key: 'amount', default: '50', label: '部队数量', type: 'number' },
                    { key: 'party_name', default: '', label: '队伍名称（省略为空时为主队伍）' },
                ],
            },
            {
                name: "添加同伴",
                code: "campaign.add_companion",
                description: "为你的队伍添加一个随机同伴",
            },
            {
                name: "添加指定数量的同伴到队伍中",
                code: "campaign.add_companions {amount}",
                description: "向你的队伍添加指定数量的同伴。",
                params: [
                    { key: 'amount', default: '1', label: '同伴数量', type: 'number' },
                ],
            }
        ],
    },
    {
        name: '其他有用的命令',
        commands: [
            {
                name: '激活所有政策',
                code: 'campaign.activate_all_policies_for_player_kingdom',
                description: '为玩家的王国激活所有政策。',
            },
            // {
            //     name: '增加指定城镇的指定建筑等级',
            //     code: 'campaign.add_building_level {settlement_name} | {building_name}',
            //     description: '增加指定城镇指定建筑的等级。',
            //     params: [
            //         { key: 'settlement_name', label: '城镇名称' },
            //         { key: 'building_name', label: '建筑名称' },
            //     ],
            // },
            {
                name: '给予玩家所有城镇和要塞',
                code: 'campaign.give_settlements_to_player Calradia',
                description: '给予玩家所有城镇和要塞。',
            },
            {
                name: '为指定英雄添加商队',
                code: 'campaign.add_caravan_to_hero',
                description: '为指定英雄添加一支商队。',
            },
            {
                name: '添加随从',
                code: 'campaign.add_companion',
                description: '为你的队伍添加一个随从。',
            },
            {
                name: '添加马匹',
                code: 'campaign.add_horse',
                description: '为指定英雄添加一匹马。',
            },
            {
                name: '增加队伍士气',
                code: 'campaign.add_morale_to_party',
                description: '增加主队伍的士气值。',
            },
            {
                name: '添加囚犯',
                code: 'campaign.add_prisoner',
                description: '为你的队伍添加一名囚犯。',
            },
            {
                name: '增加当前建筑进度',
                code: 'campaign.add_progress_to_current_building',
                description: '为当前建筑增加建造进度。',
            },
            {
                name: '添加随机英雄到队伍',
                code: 'campaign.add_random_hero_to_party',
                description: '向你的队伍添加一名随机英雄。',
            },
            {
                name: '添加随机英雄囚犯',
                code: 'campaign.add_random_prisoner_hero',
                description: '向你的队伍添加一名随机英雄囚犯。',
            },
            {
                name: '为指定英雄添加样本子女',
                code: 'campaign.add_sample_children_to_main_character',
                description: '为指定英雄添加一些样本子女。',
            },
            {
                name: '收养英雄',
                code: 'campaign.adopt_hero',
                description: '收养指定的英雄。',
                params: [
                    { key: 'hero_id', default: '', label: '英雄ID' },
                ],
            },
            {
                name: '创建玩家王国',
                code: 'campaign.create_player_kingdom',
                description: '立即创建一个属于你的王国。',
            },
            {
                name: '与所有派系和平',
                code: 'campaign.make_peace_with_every_faction',
                description: '与所有派系和平，清除你的犯罪记录。',
            },
            // ... 根据需要继续添加其他命令
        ],
    },
];
