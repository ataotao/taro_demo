import React from "react";
import { View, Text } from "@tarojs/components";
import { useEnv } from "taro-hooks";


const Nodes = () => {
  const env = useEnv();


  return (
    <View className="list">
      <Text className="label">运行环境</Text>
      <Text className="note">{env}</Text>
    </View>
  );
};

export default Nodes;
