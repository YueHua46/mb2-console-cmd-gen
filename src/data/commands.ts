// src/data/commands.ts
import { troops } from "./troops";

export interface Command {
    name: string; // i18n 键
    code: string; // i18n 键或固定命令
    description: string; // i18n 键
    params?: { key: string; default?: string; label?: string; type?: string; options?: { value: string; label: string }[] }[];
}

export interface Category {
    name: string; // i18n 键
    commands: Command[];
}

export const categories: Category[] = [
    {
        name: 'generate.commands.console_settings.title',
        commands: [
            {
                name: 'generate.commands.console_settings.open_console.name',
                code: 'generate.commands.console_settings.open_console.code',
                description: 'generate.commands.console_settings.open_console.description',
            },
            {
                name: 'generate.commands.console_settings.enable_cheat.name',
                code: 'campaign.cheat_mode.enable', // 固定命令，不需要翻译
                description: 'generate.commands.console_settings.enable_cheat.description',
            },
            {
                name: 'generate.commands.console_settings.disable_cheat.name',
                code: 'campaign.cheat_mode.disable', // 固定命令，不需要翻译
                description: 'generate.commands.console_settings.disable_cheat.description',
            },
        ],
    },
    {
        name: 'generate.commands.map_commands.title',
        commands: [
            {
                name: 'generate.commands.map_commands.map_teleport.name',
                code: 'generate.commands.map_commands.map_teleport.code',
                description: 'generate.commands.map_commands.map_teleport.description',
            },
            {
                name: 'generate.commands.map_commands.show_on_map_troops.name',
                code: 'campaign.set_armies_and_parties_visible 1', // 固定命令，不需要翻译
                description: 'generate.commands.map_commands.show_on_map_troops.description',
            },
        ],
    },
    {
        name: 'generate.commands.combat_commands.title',
        commands: [
            {
                name: 'generate.commands.combat_commands.heal_self.name',
                code: 'CTRL + H', // 固定快捷键，不需要翻译
                description: 'generate.commands.combat_commands.heal_self.description',
            },
            {
                name: 'generate.commands.combat_commands.heal_horse.name',
                code: 'CTRL + Shift + H', // 固定快捷键，不需要翻译
                description: 'generate.commands.combat_commands.heal_horse.description',
            },
            {
                name: 'generate.commands.combat_commands.knock_down_one_enemy.name',
                code: 'CTRL + F4', // 固定快捷键，不需要翻译
                description: 'generate.commands.combat_commands.knock_down_one_enemy.description',
            },
            {
                name: 'generate.commands.combat_commands.knock_down_all_enemies.name',
                code: 'CTRL + ALT + F4', // 固定快捷键，不需要翻译
                description: 'generate.commands.combat_commands.knock_down_all_enemies.description',
            },
            {
                name: 'generate.commands.combat_commands.knock_down_one_ally.name',
                code: 'CTRL + F2', // 固定快捷键，不需要翻译
                description: 'generate.commands.combat_commands.knock_down_one_ally.description',
            },
            {
                name: 'generate.commands.combat_commands.knock_down_all_allies.name',
                code: 'CTRL + ALT + F2', // 固定快捷键，不需要翻译
                description: 'generate.commands.combat_commands.knock_down_all_allies.description',
            },
            {
                name: 'generate.commands.combat_commands.knock_down_self.name',
                code: 'CTRL + F3', // 固定快捷键，不需要翻译
                description: 'generate.commands.combat_commands.knock_down_self.description',
            },
        ],
    },
    {
        name: 'generate.commands.add_gold_skill_points_relationships.title',
        commands: [
            {
                name: 'generate.commands.add_gold_skill_points_relationships.add_gold.name',
                code: 'campaign.add_gold_to_hero {hero_name} | {amount}',
                description: 'generate.commands.add_gold_skill_points_relationships.add_gold.description',
                params: [
                    { key: 'hero_name', default: '', label: 'generate.parameters.hero_name' },
                    { key: 'amount', default: '50000', label: 'generate.parameters.gold_amount' },
                ],
            },
            {
                name: 'generate.commands.add_gold_skill_points_relationships.add_gold_for_everyone.name',
                code: 'campaign.add_gold_to_all_heroes {amount}',
                description: 'generate.commands.add_gold_skill_points_relationships.add_gold_for_everyone.description',
                params: [
                    { key: 'amount', default: '50000', label: 'generate.parameters.gold_amount' },
                ],
            },
            {
                name: 'generate.commands.add_gold_skill_points_relationships.increase_influence.name',
                code: 'campaign.add_influence {amount}',
                description: 'generate.commands.add_gold_skill_points_relationships.increase_influence.description',
                params: [
                    { key: 'amount', default: '100', label: 'generate.parameters.influence_amount' },
                ],
            },
            {
                name: 'generate.commands.add_gold_skill_points_relationships.increase_renown.name',
                code: 'campaign.add_renown_to_clan {clan_name} | {amount}',
                description: 'generate.commands.add_gold_skill_points_relationships.increase_renown.description',
                params: [
                    { key: 'clan_name', default: '', label: 'generate.parameters.clan_name' },
                    { key: 'amount', default: '500', label: 'generate.parameters.renown_amount' },
                ],
            },
            {
                name: 'generate.commands.add_gold_skill_points_relationships.increase_focus_points.name',
                code: 'campaign.add_focus_points_to_hero {hero_name} | {amount}',
                description: 'generate.commands.add_gold_skill_points_relationships.increase_focus_points.description',
                params: [
                    { key: 'hero_name', default: '', label: 'generate.parameters.hero_name' },
                    { key: 'amount', default: '30', label: 'generate.parameters.focus_points_amount' },
                ],
            },
            {
                name: 'generate.commands.add_gold_skill_points_relationships.increase_attribute_points.name',
                code: 'campaign.add_attribute_points_to_hero {hero_name} | {amount}',
                description: 'generate.commands.add_gold_skill_points_relationships.increase_attribute_points.description',
                params: [
                    { key: 'hero_name', default: '', label: 'generate.parameters.hero_name' },
                    { key: 'amount', default: '30', label: 'generate.parameters.attribute_points_amount' },
                ],
            },
            {
                name: 'generate.commands.add_gold_skill_points_relationships.add_troops_xp.name',
                code: 'campaign.add_troops_xp {amount}',
                description: 'generate.commands.add_gold_skill_points_relationships.add_troops_xp.description',
                params: [
                    { key: 'amount', default: '999', label: 'generate.parameters.xp_amount' },
                ],
            },
            {
                name: 'generate.commands.add_gold_skill_points_relationships.increase_hero_relation.name',
                code: 'campaign.add_hero_relation {hero_name} | {amount}',
                description: 'generate.commands.add_gold_skill_points_relationships.increase_hero_relation.description',
                params: [
                    { key: 'hero_name', default: '', label: 'generate.parameters.hero_name' },
                    { key: 'amount', default: '100', label: 'generate.parameters.relation_amount' },
                ],
            },
            {
                name: 'generate.commands.add_gold_skill_points_relationships.increase_all_heroes_relation.name',
                code: 'campaign.add_hero_relation ALL | {amount}',
                description: 'generate.commands.add_gold_skill_points_relationships.increase_all_heroes_relation.description',
                params: [
                    { key: 'amount', default: '100', label: 'generate.parameters.relation_amount' },
                ],
            }
        ],
    },
    {
        name: 'generate.commands.skill_commands.title',
        commands: [
            {
                name: 'generate.commands.skill_commands.increase_two_handed_xp.name',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | TwoHanded | {amount}',
                description: 'generate.commands.skill_commands.increase_two_handed_xp.description',
                params: [
                    { key: 'hero_name', default: '', label: 'generate.parameters.hero_name' },
                    { key: 'amount', default: '99999', label: 'generate.parameters.xp_amount' },
                ],
            },
            {
                name: 'generate.commands.skill_commands.increase_one_handed_xp.name',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | OneHanded | {amount}',
                description: 'generate.commands.skill_commands.increase_one_handed_xp.description',
                params: [
                    { key: 'hero_name', default: '', label: 'generate.parameters.hero_name' },
                    { key: 'amount', default: '99999', label: 'generate.parameters.xp_amount' },
                ],
            },
            {
                name: 'generate.commands.skill_commands.increase_athletics_xp.name',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Athletics | {amount}',
                description: 'generate.commands.skill_commands.increase_athletics_xp.description',
                params: [
                    { key: 'hero_name', default: '', label: 'generate.parameters.hero_name' },
                    { key: 'amount', default: '99999', label: 'generate.parameters.xp_amount' },
                ],
            },
            {
                name: 'generate.commands.skill_commands.increase_throwing_xp.name',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Throwing | {amount}',
                description: 'generate.commands.skill_commands.increase_throwing_xp.description',
                params: [
                    { key: 'hero_name', default: '', label: 'generate.parameters.hero_name' },
                    { key: 'amount', default: '99999', label: 'generate.parameters.xp_amount' },
                ],
            },
            {
                name: 'generate.commands.skill_commands.increase_riding_xp.name',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Riding | {amount}',
                description: 'generate.commands.skill_commands.increase_riding_xp.description',
                params: [
                    { key: 'hero_name', default: '', label: 'generate.parameters.hero_name' },
                    { key: 'amount', default: '99999', label: 'generate.parameters.xp_amount' },
                ],
            },
            {
                name: 'generate.commands.skill_commands.increase_bow_xp.name',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Bow | {amount}',
                description: 'generate.commands.skill_commands.increase_bow_xp.description',
                params: [
                    { key: 'hero_name', default: '', label: 'generate.parameters.hero_name' },
                    { key: 'amount', default: '99999', label: 'generate.parameters.xp_amount' },
                ],
            },
            {
                name: 'generate.commands.skill_commands.increase_polearm_xp.name',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Polearm | {amount}',
                description: 'generate.commands.skill_commands.increase_polearm_xp.description',
                params: [
                    { key: 'hero_name', default: '', label: 'generate.parameters.hero_name' },
                    { key: 'amount', default: '99999', label: 'generate.parameters.xp_amount' },
                ],
            },
            {
                name: 'generate.commands.skill_commands.increase_crossbow_xp.name',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Crossbow | {amount}',
                description: 'generate.commands.skill_commands.increase_crossbow_xp.description',
                params: [
                    { key: 'hero_name', default: '', label: 'generate.parameters.hero_name' },
                    { key: 'amount', default: '99999', label: 'generate.parameters.xp_amount' },
                ],
            },
            {
                name: 'generate.commands.skill_commands.increase_smithing_xp.name',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Smithing | {amount}',
                description: 'generate.commands.skill_commands.increase_smithing_xp.description',
                params: [
                    { key: 'hero_name', default: '', label: 'generate.parameters.hero_name' },
                    { key: 'amount', default: '99999', label: 'generate.parameters.xp_amount' },
                ],
            },
            {
                name: 'generate.commands.skill_commands.increase_roguery_xp.name',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Roguery | {amount}',
                description: 'generate.commands.skill_commands.increase_roguery_xp.description',
                params: [
                    { key: 'hero_name', default: '', label: 'generate.parameters.hero_name' },
                    { key: 'amount', default: '99999', label: 'generate.parameters.xp_amount' },
                ],
            },
            {
                name: 'generate.commands.skill_commands.increase_tactics_xp.name',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Tactics | {amount}',
                description: 'generate.commands.skill_commands.increase_tactics_xp.description',
                params: [
                    { key: 'hero_name', default: '', label: 'generate.parameters.hero_name' },
                    { key: 'amount', default: '99999', label: 'generate.parameters.xp_amount' },
                ],
            },
            {
                name: 'generate.commands.skill_commands.increase_scouting_xp.name',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Scouting | {amount}',
                description: 'generate.commands.skill_commands.increase_scouting_xp.description',
                params: [
                    { key: 'hero_name', default: '', label: 'generate.parameters.hero_name' },
                    { key: 'amount', default: '99999', label: 'generate.parameters.xp_amount' },
                ],
            },
            {
                name: 'generate.commands.skill_commands.increase_charm_xp.name',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Charm | {amount}',
                description: 'generate.commands.skill_commands.increase_charm_xp.description',
                params: [
                    { key: 'hero_name', default: '', label: 'generate.parameters.hero_name' },
                    { key: 'amount', default: '99999', label: 'generate.parameters.xp_amount' },
                ],
            },
            {
                name: 'generate.commands.skill_commands.increase_leadership_xp.name',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Leadership | {amount}',
                description: 'generate.commands.skill_commands.increase_leadership_xp.description',
                params: [
                    { key: 'hero_name', default: '', label: 'generate.parameters.hero_name' },
                    { key: 'amount', default: '99999', label: 'generate.parameters.xp_amount' },
                ],
            },
            {
                name: 'generate.commands.skill_commands.increase_trade_xp.name',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Trade | {amount}',
                description: 'generate.commands.skill_commands.increase_trade_xp.description',
                params: [
                    { key: 'hero_name', default: '', label: 'generate.parameters.hero_name' },
                    { key: 'amount', default: '99999', label: 'generate.parameters.xp_amount' },
                ],
            },
            {
                name: 'generate.commands.skill_commands.increase_steward_xp.name',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Steward | {amount}',
                description: 'generate.commands.skill_commands.increase_steward_xp.description',
                params: [
                    { key: 'hero_name', default: '', label: 'generate.parameters.hero_name' },
                    { key: 'amount', default: '99999', label: 'generate.parameters.xp_amount' },
                ],
            },
            {
                name: 'generate.commands.skill_commands.increase_medicine_xp.name',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Medicine | {amount}',
                description: 'generate.commands.skill_commands.increase_medicine_xp.description',
                params: [
                    { key: 'hero_name', default: '', label: 'generate.parameters.hero_name' },
                    { key: 'amount', default: '99999', label: 'generate.parameters.xp_amount' },
                ],
            },
            {
                name: 'generate.commands.skill_commands.increase_engineering_xp.name',
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Engineering | {amount}',
                description: 'generate.commands.skill_commands.increase_engineering_xp.description',
                params: [
                    { key: 'hero_name', default: '', label: 'generate.parameters.hero_name' },
                    { key: 'amount', default: '99999', label: 'generate.parameters.xp_amount' },
                ],
            },
        ],
    },
    {
        name: 'generate.commands.item_commands.title',
        commands: [
            {
                name: 'generate.commands.item_commands.give_all_crafting_materials.name',
                code: 'campaign.give_all_crafting_materials_to_main_party {amount}',
                description: 'generate.commands.item_commands.give_all_crafting_materials.description',
                params: [
                    { key: 'amount', default: '1000', label: 'generate.parameters.amount' },
                ],
            }
        ]
    },
    {
        name: 'generate.commands.party_commands.title',
        commands: [
            {
                name: 'generate.commands.party_commands.add_troops.name',
                code: 'campaign.add_troops {troop_id} | {amount} | {party_name}',
                description: 'generate.commands.party_commands.add_troops.description',
                params: [
                    {
                        key: 'troop_id',
                        label: 'generate.parameters.troop_name',
                        type: 'select',
                        options: troops.map(troop => ({ value: troop.id, label: `troops.${troop.id}` })), // 使用 i18n 键
                    },
                    { key: 'amount', default: '50', label: 'generate.parameters.amount', type: 'number' },
                    { key: 'party_name', default: '', label: 'generate.parameters.party_name', type: 'text' },
                ],
            },
            {
                name: 'generate.commands.party_commands.add_companion.name',
                code: 'campaign.add_companion',
                description: 'generate.commands.party_commands.add_companion.description',
            },
            {
                name: 'generate.commands.party_commands.add_companions.name',
                code: 'campaign.add_companions {amount}',
                description: 'generate.commands.party_commands.add_companions.description',
                params: [
                    { key: 'amount', default: '1', label: 'generate.parameters.amount', type: 'number' },
                ],
            }
        ],
    },
    {
        name: 'generate.commands.other_useful_commands.title',
        commands: [
            {
                name: 'generate.commands.other_useful_commands.activate_all_policies.name',
                code: 'campaign.activate_all_policies_for_player_kingdom',
                description: 'generate.commands.other_useful_commands.activate_all_policies.description',
            },
            {
                name: 'generate.commands.other_useful_commands.give_all_settlements.name',
                code: 'campaign.give_settlements_to_player Calradia',
                description: 'generate.commands.other_useful_commands.give_all_settlements.description',
            },
            {
                name: 'generate.commands.other_useful_commands.add_caravan_to_hero.name',
                code: 'campaign.add_caravan_to_hero',
                description: 'generate.commands.other_useful_commands.add_caravan_to_hero.description',
                params: [
                    { key: 'hero_name', default: '', label: 'generate.parameters.hero_name' },
                ],
            },
            {
                name: 'generate.commands.other_useful_commands.add_companion_followers.name',
                code: 'campaign.add_companion',
                description: 'generate.commands.other_useful_commands.add_companion_followers.description',
            },
            {
                name: 'generate.commands.other_useful_commands.add_horse_to_hero.name',
                code: 'campaign.add_horse',
                description: 'generate.commands.other_useful_commands.add_horse_to_hero.description',
                params: [
                    { key: 'hero_name', default: '', label: 'generate.parameters.hero_name' },
                ],
            },
            {
                name: 'generate.commands.other_useful_commands.increase_party_morale.name',
                code: 'campaign.add_morale_to_party',
                description: 'generate.commands.other_useful_commands.increase_party_morale.description',
            },
            {
                name: 'generate.commands.other_useful_commands.add_prisoner.name',
                code: 'campaign.add_prisoner',
                description: 'generate.commands.other_useful_commands.add_prisoner.description',
            },
            {
                name: 'generate.commands.other_useful_commands.add_building_progress.name',
                code: 'campaign.add_progress_to_current_building',
                description: 'generate.commands.other_useful_commands.add_building_progress.description',
            },
            {
                name: 'generate.commands.other_useful_commands.add_random_hero_to_party.name',
                code: 'campaign.add_random_hero_to_party',
                description: 'generate.commands.other_useful_commands.add_random_hero_to_party.description',
            },
            {
                name: 'generate.commands.other_useful_commands.add_random_prisoner_hero.name',
                code: 'campaign.add_random_prisoner_hero',
                description: 'generate.commands.other_useful_commands.add_random_prisoner_hero.description',
            },
            {
                name: 'generate.commands.other_useful_commands.add_sample_children_to_main_character.name',
                code: 'campaign.add_sample_children_to_main_character',
                description: 'generate.commands.other_useful_commands.add_sample_children_to_main_character.description',
            },
            {
                name: 'generate.commands.other_useful_commands.adopt_hero.name',
                code: 'campaign.adopt_hero',
                description: 'generate.commands.other_useful_commands.adopt_hero.description',
                params: [
                    { key: 'hero_id', default: '', label: 'generate.parameters.hero_id' },
                ],
            },
            {
                name: 'generate.commands.other_useful_commands.create_player_kingdom.name',
                code: 'campaign.create_player_kingdom',
                description: 'generate.commands.other_useful_commands.create_player_kingdom.description',
            },
            {
                name: 'generate.commands.other_useful_commands.make_peace_with_every_faction.name',
                code: 'campaign.make_peace_with_every_faction',
                description: 'generate.commands.other_useful_commands.make_peace_with_every_faction.description',
            },
        ],
    },
];
