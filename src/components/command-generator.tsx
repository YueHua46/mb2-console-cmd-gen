// src/components/CommandGenerator.tsx

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CodeBlock from '@/components/code-block';
import { categories, Command, Category } from '@/data/commands';
import clsx from 'clsx';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { cultures, troops } from '@/data/troops';

const CommandGenerator: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [selectedCommand, setSelectedCommand] = useState<Command | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [params, setParams] = useState<{ [key: string]: string }>({});
    const [selectedCulture, setSelectedCulture] = useState<string>('');
    const [selectedTroop, setSelectedTroop] = useState<string>('');
    const [globalSearchTerm, setGlobalSearchTerm] = useState<string>('');

    const handleCategorySelect = (category: Category) => {
        setSelectedCategory(category);
        setSelectedCommand(null);
        setSearchTerm('');
        setParams({});
        setSelectedCulture('');
        setSelectedTroop('');
        setGlobalSearchTerm('');
    };

    const handleCommandSelect = (command: Command) => {
        setSelectedCommand(command);
        // 初始化参数
        const initialParams: { [key: string]: string } = {};
        if (command.params) {
            command.params.forEach((param) => {
                if (param.type === 'select' && param.options) {
                    initialParams[param.key] = ''; // 初始化为空字符串
                } else {
                    initialParams[param.key] = param.default || '';
                }
            });
        }
        setParams(initialParams);
        setSelectedCulture(''); // 重置文化选择
        setSelectedTroop('');
    };

    // 处理参数变化
    const handleParamChange = (key: string, value: string) => {
        setParams((prev) => ({ ...prev, [key]: value }));
    };

    const generateCommand = (command: Command, params: { [key: string]: string }) => {
        let cmd = command.code;

        if (command.params) {
            command.params.forEach((param) => {
                const value = params[param.key];
                if (value) {
                    // 替换占位符
                    cmd = cmd.replace(new RegExp(`\\{${param.key}\\}`, 'g'), value);
                } else {
                    // 移除占位符及其前后的分隔符（例如 |）
                    // 处理 " | {param}"
                    cmd = cmd.replace(new RegExp(`\\s*\\|\\s*\\{${param.key}\\}`, 'g'), '');
                    // 处理 "{param} | "
                    cmd = cmd.replace(new RegExp(`\\{${param.key}\\}\\s*\\|\\s*`, 'g'), '');
                    // 处理孤立的 "{param}"
                    cmd = cmd.replace(new RegExp(`\\{${param.key}\\}`, 'g'), '');
                }
            });
        }

        // 清理多余的空格
        cmd = cmd.replace(/\s{2,}/g, ' ').trim();

        return cmd;
    };

    // 过滤命令，根据是否进行全局搜索
    const filteredCommands = (() => {
        if (globalSearchTerm.trim() !== '') {
            // 全局搜索，忽略类别
            return categories.flatMap(category => category.commands)
                .filter(command => command.name.toLowerCase().includes(globalSearchTerm.toLowerCase()));
        } else if (selectedCategory) {
            // 按类别搜索
            return selectedCategory.commands.filter(command =>
                command.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        } else {
            // 无类别选择且无全局搜索，显示所有命令
            return categories.flatMap(category => category.commands);
        }
    })();

    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-xl'>命令生成器</CardTitle>
            </CardHeader>
            <CardContent>
                <div className='flex flex-col gap-4'>
                    {/* 全局搜索 */}
                    <div>
                        <h3 className='mb-2 font-semibold'>全局搜索命令</h3>
                        <Input
                            type='text'
                            placeholder='搜索所有命令...'
                            value={globalSearchTerm}
                            onChange={(e) => {
                                setGlobalSearchTerm(e.target.value);
                                if (e.target.value.trim() !== '') {
                                    setSelectedCategory(null); // 清除类别选择
                                    setSelectedCommand(null);
                                }
                            }}
                        />
                    </div>

                    {/* 分类选择 */}
                    {!globalSearchTerm && (
                        <div>
                            <h3 className='mb-2 font-semibold'>选择分类</h3>
                            <div className='flex flex-wrap gap-2'>
                                {categories.map((category) => (
                                    <Button
                                        variant={"default"}
                                        key={category.name}
                                        onClick={() => {
                                            if (selectedCategory?.name === category.name) return;
                                            handleCategorySelect(category)
                                        }}
                                        className={
                                            category.name === selectedCategory?.name
                                                ? ' bg-slate-800 text-ivory hover:bg-slate-800'
                                                : 'bg-slate-700 text-ivory hover:bg-slate-800'
                                        }
                                    >
                                        {category.name}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className='flex gap-4'>
                        <div className='flex flex-col gap-4 max-w-1/2 min-w-1/2'>
                            {/* 命令选择与搜索 */}
                            {((!globalSearchTerm && selectedCategory) || (globalSearchTerm && filteredCommands.length > 0)) && (
                                <div>
                                    <h3 className='mb-2 font-semibold'>选择命令</h3>
                                    {/* 搜索框，仅在类别选择时显示 */}
                                    {!globalSearchTerm && selectedCategory && (
                                        <Input
                                            type='text'
                                            placeholder='搜索命令...'
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                    )}
                                    <div className='flex gap-2 mt-2 flex-wrap'>
                                        {filteredCommands.length > 0 ? (
                                            filteredCommands.map((command) => (
                                                <Button
                                                    key={command.name}
                                                    className={clsx(
                                                        'px-4 py-2 rounded text-left',
                                                        selectedCommand?.name === command.name
                                                            ? 'bg-slate-800 text-ivory hover:bg-slate-800'
                                                            : 'bg-slate-700 text-ivory hover:bg-slate-800'
                                                    )}
                                                    onClick={() => handleCommandSelect(command)}
                                                >
                                                    {command.name}
                                                </Button>
                                            ))
                                        ) : (
                                            <p className='text-muted-foreground'>未找到匹配的命令。</p>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* 参数输入 */}
                            {selectedCommand && selectedCommand.params && (
                                <div>
                                    <h3 className='mb-2 font-semibold'>输入参数</h3>
                                    <div className='flex flex-col gap-4'>
                                        {selectedCommand.params.map((param) => {
                                            if (param.type === 'select' && param.options) {
                                                // 如果是特定参数需要特殊处理，例如部队选择
                                                if (param.key === 'troop_id') {
                                                    return (
                                                        <div key={param.key} className='flex flex-col gap-2'>
                                                            <label className='mb-1'>{param.label}</label>
                                                            {/* 文化选择 */}
                                                            <Select
                                                                value={selectedCulture}
                                                                onValueChange={(value) => {
                                                                    setSelectedCulture(value);
                                                                    // 重置部队选择
                                                                    handleParamChange(param.key, '');
                                                                }}
                                                            >
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="选择文化" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    {cultures.map((culture) => (
                                                                        <SelectItem key={culture} value={culture}>
                                                                            {culture}
                                                                        </SelectItem>
                                                                    ))}
                                                                </SelectContent>
                                                            </Select>
                                                            {/* 部队选择 */}
                                                            {selectedCulture && (
                                                                <Select
                                                                    value={selectedTroop}
                                                                    onValueChange={(value) => {
                                                                        setSelectedTroop(value);
                                                                        handleParamChange(param.key, value);
                                                                    }}
                                                                >
                                                                    <SelectTrigger>
                                                                        <SelectValue placeholder="选择部队" />
                                                                    </SelectTrigger>
                                                                    <SelectContent>
                                                                        {troops
                                                                            .filter((troop) => troop.culture === selectedCulture)
                                                                            .map((troop) => (
                                                                                <SelectItem key={troop.id} value={troop.id}>
                                                                                    {troop.name}
                                                                                </SelectItem>
                                                                            ))}
                                                                    </SelectContent>
                                                                </Select>
                                                            )}
                                                        </div>
                                                    );
                                                } else {
                                                    // 其他下拉选择参数
                                                    return (
                                                        <div key={param.key} className='flex flex-col'>
                                                            <label className='mb-1'>{param.label}</label>
                                                            <select
                                                                className='p-2 border border-border rounded'
                                                                value={params[param.key]}
                                                                onChange={(e) => handleParamChange(param.key, e.target.value)}
                                                            >
                                                                <option value=''>选择 {param.label}</option>
                                                                {param.options.map((option) => (
                                                                    <option key={option.value} value={option.value}>
                                                                        {option.label}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    );
                                                }
                                            } else if (param.type === 'number') {
                                                return (
                                                    <div key={param.key} className='flex flex-col'>
                                                        <label className='mb-1'>{param.label}</label>
                                                        <Input
                                                            type='number'
                                                            className='p-2 border border-border rounded'
                                                            value={params[param.key]}
                                                            onChange={(e) => handleParamChange(param.key, e.target.value)}
                                                            placeholder={param.default}
                                                        />
                                                    </div>
                                                );
                                            } else {
                                                return (
                                                    <div key={param.key} className='flex flex-col'>
                                                        <label className='mb-1'>{param.label}</label>
                                                        <Input
                                                            type='text'
                                                            className='p-2 border border-border rounded'
                                                            value={params[param.key]}
                                                            onChange={(e) => handleParamChange(param.key, e.target.value)}
                                                            placeholder={param.default}
                                                        />
                                                    </div>
                                                );
                                            }
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* 命令显示 */}
                        {selectedCommand && (
                            <div className='flex-1'>
                                <h3 className='mb-2 font-semibold'>生成的命令</h3>
                                <div className='relative'>
                                    <p className='mt-2 text-sm'>{selectedCommand.description}</p>
                                    <CodeBlock>
                                        {generateCommand(selectedCommand, params)}
                                    </CodeBlock>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default CommandGenerator;
