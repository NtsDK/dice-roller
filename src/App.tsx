import { observer } from "mobx-react-lite";
import { Button, Layout, Space, InputNumber, Flex, Radio } from "antd";
import { useState } from "react";
import { Routes, Route, HashRouter } from "react-router";
import { CloseOutlined } from "@ant-design/icons";
import type { CheckboxGroupProps } from "antd/es/checkbox";

import { diceStore } from "./domainServices/DiceStore";
import { DEFAULT_DICE_COUNT, diceDescriptions } from "./constants";
import type { DiceType } from "./domain";

const options: CheckboxGroupProps<string>['options'] = diceDescriptions.map(desc => ({
  label: desc.id,
  value: desc.id,
}));


export const App = observer(() => {
  const { diceCount, diceType, rollResult } = diceStore;
  return (
    <div>
      <div>Число кубов</div>
      <Flex gap={20}>
        <InputNumber min={1} value={diceCount} onChange={(value) => diceStore.setDiceCount(value)} />
        <Space.Compact block>
          <Button type="default" onClick={changeDiceCount(-10)}>-10</Button>
          <Button type="default" onClick={changeDiceCount(-5)}>-5</Button>
          <Button type="default" onClick={changeDiceCount(-1)}>-1</Button>
          <Button type="default" onClick={changeDiceCount(1)}>+1</Button>
          <Button type="default" onClick={changeDiceCount(5)}>+5</Button>
          <Button type="default" onClick={changeDiceCount(10)}>+10</Button>
          <Button type="default" onClick={() => diceStore.setDiceCount(DEFAULT_DICE_COUNT)}><CloseOutlined className="tw-w-2" /></Button>
        </Space.Compact>
      </Flex>
      <div>Тип игровой кости</div>

      <Radio.Group
        value={diceType}
        options={options}
        optionType="button"
        buttonStyle="solid"
        onChange={(e) => { diceStore.setDiceType(e.target.value as DiceType); }}
      />
      <Flex gap={20}>
        <Button type="primary" onClick={() => diceStore.clear()}>Очистить</Button>
        <Button type="primary" onClick={() => diceStore.roll()}>Бросить</Button>
      </Flex>
      <Flex gap={8}>
        {rollResult.map((value) => <span>{value}</span>)}
      </Flex>
    </div>
  );
});


function changeDiceCount(delta: number) {
  return () => {
    const { diceCount } = diceStore;
    diceStore.setDiceCount(diceCount + delta)
  }
}
