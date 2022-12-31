import React, { UserState } from "react";
import { Text, View, ActivityIndicator, Modal } from "react-native";
export default function Carregamento({ visible }) {
    return (
        <Modal transparent visible={visible}>
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <ActivityIndicator
                    size="large"
                    color="blue"
                    animating={true}
                ></ActivityIndicator>
            </View>
        </Modal>
    );
}
