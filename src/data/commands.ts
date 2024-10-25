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
        name: "generate.console_settings.title",
        commands: [
            {
                name: "generate.console_settings.children.open_console.title",
                code: "generate.console_settings.children.open_console.generated_command",
                description: "generate.console_settings.children.open_console.description",
            },
            {
                name: "generate.console_settings.children.enable_cheat.title",
                code: 'config.cheat_mode 1', // 固定命令，不需要翻译
                description: "generate.console_settings.children.enable_cheat.description",
            },
            {
                name: "generate.console_settings.children.disable_cheat.title",
                code: 'config.cheat_mode 0', // 固定命令，不需要翻译
                description: "generate.console_settings.children.disable_cheat.description",
            },
        ],
    },
    {
        name: "generate.map_commands.title",
        commands: [
            {
                name: "generate.map_commands.children.map_teleport.title",
                code: "generate.map_commands.children.map_teleport.generated_command",
                description: "generate.map_commands.children.map_teleport.description",
            },
            {
                name: "generate.map_commands.children.show_on_map_troops.title",
                code: 'campaign.set_armies_and_parties_visible 1', // 固定命令，不需要翻译
                description: "generate.map_commands.children.show_on_map_troops.description",
            },
        ],
    },
    {
        name: "generate.combat_commands.title",
        commands: [
            {
                name: "generate.combat_commands.children.heal_self.title",
                code: 'CTRL + H', // 固定快捷键，不需要翻译
                description: "generate.combat_commands.children.heal_self.description",
            },
            {
                name: "generate.combat_commands.children.heal_horse.title",
                code: 'CTRL + Shift + H', // 固定快捷键，不需要翻译
                description: "generate.combat_commands.children.heal_horse.description",
            },
            {
                name: "generate.combat_commands.children.knock_down_one_enemy.title",
                code: 'CTRL + F4', // 固定快捷键，不需要翻译
                description: "generate.combat_commands.children.knock_down_one_enemy.description",
            },
            {
                name: "generate.combat_commands.children.knock_down_all_enemies.title",
                code: 'CTRL + ALT + F4', // 固定快捷键，不需要翻译
                description: "generate.combat_commands.children.knock_down_all_enemies.description",
            },
            {
                name: "generate.combat_commands.children.knock_down_one_ally.title",
                code: 'CTRL + F2', // 固定快捷键，不需要翻译
                description: "generate.combat_commands.children.knock_down_one_ally.description",
            },
            {
                name: "generate.combat_commands.children.knock_down_all_allies.title",
                code: 'CTRL + ALT + F2', // 固定快捷键，不需要翻译
                description: "generate.combat_commands.children.knock_down_all_allies.description",
            },
            {
                name: "generate.combat_commands.children.knock_down_self.title",
                code: 'CTRL + F3', // 固定快捷键，不需要翻译
                description: "generate.combat_commands.children.knock_down_self.description",
            },
        ],
    },
    {
        name: "generate.add_gold_skill_points_relationships.title",
        commands: [
            {
                name: "generate.add_gold_skill_points_relationships.children.add_gold.title",
                code: 'campaign.add_gold_to_hero {hero_name} | {amount}',
                description: "generate.add_gold_skill_points_relationships.children.add_gold.description",
                params: [
                    { key: 'hero_name', default: '', label: "generate.add_gold_skill_points_relationships.children.add_gold.parameters.hero_name" },
                    { key: 'amount', default: '50000', label: "generate.add_gold_skill_points_relationships.children.add_gold.parameters.gold_amount" },
                ],
            },
            {
                name: "generate.add_gold_skill_points_relationships.children.add_gold_for_everyone.title",
                code: 'campaign.add_gold_to_all_heroes {amount}',
                description: "generate.add_gold_skill_points_relationships.children.add_gold_for_everyone.description",
                params: [
                    { key: 'amount', default: '50000', label: "generate.add_gold_skill_points_relationships.children.add_gold_for_everyone.parameters.gold_amount" },
                ],
            },
            {
                name: "generate.add_gold_skill_points_relationships.children.increase_influence.title",
                code: 'campaign.add_influence {amount}',
                description: "generate.add_gold_skill_points_relationships.children.increase_influence.description",
                params: [
                    { key: 'amount', default: '100', label: "generate.add_gold_skill_points_relationships.children.increase_influence.parameters.influence_amount" },
                ],
            },
            {
                name: "generate.add_gold_skill_points_relationships.children.increase_renown.title",
                code: 'campaign.add_renown_to_clan {clan_name} | {amount}',
                description: "generate.add_gold_skill_points_relationships.children.increase_renown.description",
                params: [
                    { key: 'clan_name', default: '', label: "generate.add_gold_skill_points_relationships.children.increase_renown.parameters.clan_name" },
                    { key: 'amount', default: '500', label: "generate.add_gold_skill_points_relationships.children.increase_renown.parameters.renown_amount" },
                ],
            },
            {
                name: "generate.add_gold_skill_points_relationships.children.increase_focus_points.title",
                code: 'campaign.add_focus_points_to_hero {hero_name} | {amount}',
                description: "generate.add_gold_skill_points_relationships.children.increase_focus_points.description",
                params: [
                    { key: 'hero_name', default: '', label: "generate.add_gold_skill_points_relationships.children.increase_focus_points.parameters.hero_name" },
                    { key: 'amount', default: '30', label: "generate.add_gold_skill_points_relationships.children.increase_focus_points.parameters.focus_points_amount" },
                ],
            },
            {
                name: "generate.add_gold_skill_points_relationships.children.increase_attribute_points.title",
                code: 'campaign.add_attribute_points_to_hero {hero_name} | {amount}',
                description: "generate.add_gold_skill_points_relationships.children.increase_attribute_points.description",
                params: [
                    { key: 'hero_name', default: '', label: "generate.add_gold_skill_points_relationships.children.increase_attribute_points.parameters.hero_name" },
                    { key: 'amount', default: '30', label: "generate.add_gold_skill_points_relationships.children.increase_attribute_points.parameters.attribute_points_amount" },
                ],
            },
            {
                name: "generate.add_gold_skill_points_relationships.children.add_troops_xp.title",
                code: 'campaign.add_troops_xp {amount}',
                description: "generate.add_gold_skill_points_relationships.children.add_troops_xp.description",
                params: [
                    { key: 'amount', default: '999', label: "generate.add_gold_skill_points_relationships.children.add_troops_xp.parameters.xp_amount" },
                ],
            },
            {
                name: "generate.add_gold_skill_points_relationships.children.increase_hero_relation.title",
                code: 'campaign.add_hero_relation {hero_name} | {amount}',
                description: "generate.add_gold_skill_points_relationships.children.increase_hero_relation.description",
                params: [
                    { key: 'hero_name', default: '', label: "generate.add_gold_skill_points_relationships.children.increase_hero_relation.parameters.hero_name" },
                    { key: 'amount', default: '100', label: "generate.add_gold_skill_points_relationships.children.increase_hero_relation.parameters.relation_amount" },
                ],
            },
            {
                name: "generate.add_gold_skill_points_relationships.children.increase_all_heroes_relation.title",
                code: 'campaign.add_hero_relation ALL | {amount}',
                description: "generate.add_gold_skill_points_relationships.children.increase_all_heroes_relation.description",
                params: [
                    { key: 'amount', default: '100', label: "generate.add_gold_skill_points_relationships.children.increase_all_heroes_relation.parameters.relation_amount" },
                ],
            }
        ],
    },
    {
        name: "generate.skill_commands.title",
        commands: [
            {
                name: "generate.skill_commands.children.increase_two_handed_xp.title",
                code: 'campaign.add_skill_xp_to_hero {hero_name} | TwoHanded | {amount}',
                description: "generate.skill_commands.children.increase_two_handed_xp.description",
                params: [
                    { key: 'hero_name', default: '', label: "generate.skill_commands.children.increase_two_handed_xp.parameters.hero_name" },
                    { key: 'amount', default: '99999', label: "generate.skill_commands.children.increase_two_handed_xp.parameters.xp_amount" },
                ],
            },
            {
                name: "generate.skill_commands.children.increase_one_handed_xp.title",
                code: 'campaign.add_skill_xp_to_hero {hero_name} | OneHanded | {amount}',
                description: "generate.skill_commands.children.increase_one_handed_xp.description",
                params: [
                    { key: 'hero_name', default: '', label: "generate.skill_commands.children.increase_one_handed_xp.parameters.hero_name" },
                    { key: 'amount', default: '99999', label: "generate.skill_commands.children.increase_one_handed_xp.parameters.xp_amount" },
                ],
            },
            {
                name: "generate.skill_commands.children.increase_athletics_xp.title",
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Athletics | {amount}',
                description: "generate.skill_commands.children.increase_athletics_xp.description",
                params: [
                    { key: 'hero_name', default: '', label: "generate.skill_commands.children.increase_athletics_xp.parameters.hero_name" },
                    { key: 'amount', default: '99999', label: "generate.skill_commands.children.increase_athletics_xp.parameters.xp_amount" },
                ],
            },
            {
                name: "generate.skill_commands.children.increase_throwing_xp.title",
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Throwing | {amount}',
                description: "generate.skill_commands.children.increase_throwing_xp.description",
                params: [
                    { key: 'hero_name', default: '', label: "generate.skill_commands.children.increase_throwing_xp.parameters.hero_name" },
                    { key: 'amount', default: '99999', label: "generate.skill_commands.children.increase_throwing_xp.parameters.xp_amount" },
                ],
            },
            {
                name: "generate.skill_commands.children.increase_riding_xp.title",
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Riding | {amount}',
                description: "generate.skill_commands.children.increase_riding_xp.description",
                params: [
                    { key: 'hero_name', default: '', label: "generate.skill_commands.children.increase_riding_xp.parameters.hero_name" },
                    { key: 'amount', default: '99999', label: "generate.skill_commands.children.increase_riding_xp.parameters.xp_amount" },
                ],
            },
            {
                name: "generate.skill_commands.children.increase_bow_xp.title",
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Bow | {amount}',
                description: "generate.skill_commands.children.increase_bow_xp.description",
                params: [
                    { key: 'hero_name', default: '', label: "generate.skill_commands.children.increase_bow_xp.parameters.hero_name" },
                    { key: 'amount', default: '99999', label: "generate.skill_commands.children.increase_bow_xp.parameters.xp_amount" },
                ],
            },
            {
                name: "generate.skill_commands.children.increase_polearm_xp.title",
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Polearm | {amount}',
                description: "generate.skill_commands.children.increase_polearm_xp.description",
                params: [
                    { key: 'hero_name', default: '', label: "generate.skill_commands.children.increase_polearm_xp.parameters.hero_name" },
                    { key: 'amount', default: '99999', label: "generate.skill_commands.children.increase_polearm_xp.parameters.xp_amount" },
                ],
            },
            {
                name: "generate.skill_commands.children.increase_crossbow_xp.title",
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Crossbow | {amount}',
                description: "generate.skill_commands.children.increase_crossbow_xp.description",
                params: [
                    { key: 'hero_name', default: '', label: "generate.skill_commands.children.increase_crossbow_xp.parameters.hero_name" },
                    { key: 'amount', default: '99999', label: "generate.skill_commands.children.increase_crossbow_xp.parameters.xp_amount" },
                ],
            },
            {
                name: "generate.skill_commands.children.increase_smithing_xp.title",
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Smithing | {amount}',
                description: "generate.skill_commands.children.increase_smithing_xp.description",
                params: [
                    { key: 'hero_name', default: '', label: "generate.skill_commands.children.increase_smithing_xp.parameters.hero_name" },
                    { key: 'amount', default: '99999', label: "generate.skill_commands.children.increase_smithing_xp.parameters.xp_amount" },
                ],
            },
            {
                name: "generate.skill_commands.children.increase_roguery_xp.title",
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Roguery | {amount}',
                description: "generate.skill_commands.children.increase_roguery_xp.description",
                params: [
                    { key: 'hero_name', default: '', label: "generate.skill_commands.children.increase_roguery_xp.parameters.hero_name" },
                    { key: 'amount', default: '99999', label: "generate.skill_commands.children.increase_roguery_xp.parameters.xp_amount" },
                ],
            },
            {
                name: "generate.skill_commands.children.increase_tactics_xp.title",
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Tactics | {amount}',
                description: "generate.skill_commands.children.increase_tactics_xp.description",
                params: [
                    { key: 'hero_name', default: '', label: "generate.skill_commands.children.increase_tactics_xp.parameters.hero_name" },
                    { key: 'amount', default: '99999', label: "generate.skill_commands.children.increase_tactics_xp.parameters.xp_amount" },
                ],
            },
            {
                name: "generate.skill_commands.children.increase_scouting_xp.title",
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Scouting | {amount}',
                description: "generate.skill_commands.children.increase_scouting_xp.description",
                params: [
                    { key: 'hero_name', default: '', label: "generate.skill_commands.children.increase_scouting_xp.parameters.hero_name" },
                    { key: 'amount', default: '99999', label: "generate.skill_commands.children.increase_scouting_xp.parameters.xp_amount" },
                ],
            },
            {
                name: "generate.skill_commands.children.increase_charm_xp.title",
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Charm | {amount}',
                description: "generate.skill_commands.children.increase_charm_xp.description",
                params: [
                    { key: 'hero_name', default: '', label: "generate.skill_commands.children.increase_charm_xp.parameters.hero_name" },
                    { key: 'amount', default: '99999', label: "generate.skill_commands.children.increase_charm_xp.parameters.xp_amount" },
                ],
            },
            {
                name: "generate.skill_commands.children.increase_leadership_xp.title",
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Leadership | {amount}',
                description: "generate.skill_commands.children.increase_leadership_xp.description",
                params: [
                    { key: 'hero_name', default: '', label: "generate.skill_commands.children.increase_leadership_xp.parameters.hero_name" },
                    { key: 'amount', default: '99999', label: "generate.skill_commands.children.increase_leadership_xp.parameters.xp_amount" },
                ],
            },
            {
                name: "generate.skill_commands.children.increase_trade_xp.title",
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Trade | {amount}',
                description: "generate.skill_commands.children.increase_trade_xp.description",
                params: [
                    { key: 'hero_name', default: '', label: "generate.skill_commands.children.increase_trade_xp.parameters.hero_name" },
                    { key: 'amount', default: '99999', label: "generate.skill_commands.children.increase_trade_xp.parameters.xp_amount" },
                ],
            },
            {
                name: "generate.skill_commands.children.increase_steward_xp.title",
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Steward | {amount}',
                description: "generate.skill_commands.children.increase_steward_xp.description",
                params: [
                    { key: 'hero_name', default: '', label: "generate.skill_commands.children.increase_steward_xp.parameters.hero_name" },
                    { key: 'amount', default: '99999', label: "generate.skill_commands.children.increase_steward_xp.parameters.xp_amount" },
                ],
            },
            {
                name: "generate.skill_commands.children.increase_medicine_xp.title",
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Medicine | {amount}',
                description: "generate.skill_commands.children.increase_medicine_xp.description",
                params: [
                    { key: 'hero_name', default: '', label: "generate.skill_commands.children.increase_medicine_xp.parameters.hero_name" },
                    { key: 'amount', default: '99999', label: "generate.skill_commands.children.increase_medicine_xp.parameters.xp_amount" },
                ],
            },
            {
                name: "generate.skill_commands.children.increase_engineering_xp.title",
                code: 'campaign.add_skill_xp_to_hero {hero_name} | Engineering | {amount}',
                description: "generate.skill_commands.children.increase_engineering_xp.description",
                params: [
                    { key: 'hero_name', default: '', label: "generate.skill_commands.children.increase_engineering_xp.parameters.hero_name" },
                    { key: 'amount', default: '99999', label: "generate.skill_commands.children.increase_engineering_xp.parameters.xp_amount" },
                ],
            },
        ],
    },
    {
        name: "generate.item_commands.title",
        commands: [
            {
                name: "generate.item_commands.children.give_all_crafting_materials.title",
                code: 'campaign.give_all_crafting_materials_to_main_party {amount}',
                description: "generate.item_commands.children.give_all_crafting_materials.description",
                params: [
                    { key: 'amount', default: '1000', label: "generate.item_commands.children.give_all_crafting_materials.parameters.amount" },
                ],
            }
        ]
    },
    {
        name: "generate.party_commands.title",
        commands: [
            {
                name: "generate.party_commands.children.add_troops.title",
                code: 'campaign.add_troops {troop_id} | {amount} | {party_name}',
                description: "generate.party_commands.children.add_troops.description",
                params: [
                    {
                        key: 'troop_id',
                        label: "generate.party_commands.children.add_troops.parameters.troop_id",
                        type: 'select',
                        options: troops.map(troop => ({ value: troop.value, label: troop.label })),
                    },
                    { key: 'amount', default: '50', label: "generate.party_commands.children.add_troops.parameters.amount", type: 'number' },
                    { key: 'party_name', default: '', label: "generate.party_commands.children.add_troops.parameters.party_name", type: 'text' },
                ],
            },
            {
                name: "generate.party_commands.children.add_companion.title",
                code: 'campaign.add_companion',
                description: "generate.party_commands.children.add_companion.description",
            },
            {
                name: "generate.party_commands.children.add_companions.title",
                code: 'campaign.add_companions {amount}',
                description: "generate.party_commands.children.add_companions.description",
                params: [
                    { key: 'amount', default: '1', label: "generate.party_commands.children.add_companions.parameters.amount", type: 'number' },
                ],
            }
        ],
    },
    {
        name: "generate.other_useful_commands.title",
        commands: [
            {
                name: "generate.other_useful_commands.children.activate_all_policies.title",
                code: 'campaign.activate_all_policies_for_player_kingdom',
                description: "generate.other_useful_commands.children.activate_all_policies.description",
            },
            {
                name: "generate.other_useful_commands.children.give_all_settlements.title",
                code: 'campaign.give_settlements_to_player Calradia',
                description: "generate.other_useful_commands.children.give_all_settlements.description",
            },
            {
                name: "generate.other_useful_commands.children.add_caravan_to_hero.title",
                code: 'campaign.add_caravan_to_hero',
                description: "generate.other_useful_commands.children.add_caravan_to_hero.description",
                params: [
                    { key: 'hero_name', default: '', label: 'generate.parameters.hero_name' },
                ],
            },
            {
                name: "generate.other_useful_commands.children.add_companion_followers.title",
                code: 'campaign.add_companion',
                description: "generate.other_useful_commands.children.add_companion_followers.description",
            },
            {
                name: "generate.other_useful_commands.children.add_horse_to_hero.title",
                code: 'campaign.add_horse',
                description: "generate.other_useful_commands.children.add_horse_to_hero.description",
                params: [
                    { key: 'hero_name', default: '', label: 'generate.parameters.hero_name' },
                ],
            },
            {
                name: "generate.other_useful_commands.children.increase_party_morale.title",
                code: 'campaign.add_morale_to_party',
                description: "generate.other_useful_commands.children.increase_party_morale.description",
            },
            {
                name: "generate.other_useful_commands.children.add_prisoner.title",
                code: 'campaign.add_prisoner',
                description: "generate.other_useful_commands.children.add_prisoner.description",
            },
            {
                name: "generate.other_useful_commands.children.add_building_progress.title",
                code: 'campaign.add_progress_to_current_building',
                description: "generate.other_useful_commands.children.add_building_progress.description",
            },
            {
                name: "generate.other_useful_commands.children.add_random_hero_to_party.title",
                code: 'campaign.add_random_hero_to_party',
                description: "generate.other_useful_commands.children.add_random_hero_to_party.description",
            },
            {
                name: "generate.other_useful_commands.children.add_random_prisoner_hero.title",
                code: 'campaign.add_random_prisoner_hero',
                description: "generate.other_useful_commands.children.add_random_prisoner_hero.description",
            },
            {
                name: "generate.other_useful_commands.children.add_sample_children_to_main_character.title",
                code: 'campaign.add_sample_children_to_main_character',
                description: "generate.other_useful_commands.children.add_sample_children_to_main_character.description",
            },
            {
                name: "generate.other_useful_commands.children.adopt_hero.title",
                code: 'campaign.adopt_hero',
                description: "generate.other_useful_commands.children.adopt_hero.description",
                params: [
                    { key: 'hero_id', default: '', label: "generate.other_useful_commands.children.adopt_hero.parameters.hero_id" },
                ],
            },
            {
                name: "generate.other_useful_commands.children.create_player_kingdom.title",
                code: 'campaign.create_player_kingdom',
                description: "generate.other_useful_commands.children.create_player_kingdom.description",
            },
            {
                name: "generate.other_useful_commands.children.make_peace_with_every_faction.title",
                code: 'campaign.make_peace_with_every_faction',
                description: "generate.other_useful_commands.children.make_peace_with_every_faction.description",
            },
        ],
    },
];
