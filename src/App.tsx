import React from "react";
import {SafeAreaView, View, Text, FlatList, StyleSheet, ScrollView, Image, Dimensions} from "react-native";
import news_data from "./news_data.json";
import NewsCard from "./components/NewsCard";
import news_banner_data from './news_banner_data.json';

function App(){
    return (
        <SafeAreaView style = {styles.container}>
        <View>
            <Text style={styles.appbar_title}>News</Text>
            <FlatList 
                ListHeaderComponent={
                    <ScrollView horizontal= {true} showsHorizontalScrollIndicator={false}>
                        
                {
                    news_banner_data.map(bannerNews => 
                    <Image style= {styles.banner_image} source={{uri: bannerNews.imageUrl}} />)
                }
            </ScrollView>
                }
                data={news_data}
                renderItem={({item}) => <NewsCard news = {item} />}
            />
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#eceff1",
    },
    banner_image: {
        height: Dimensions.get("window").height / 5,
        width: Dimensions.get("window").width / 2,
    },
    appbar_title:{
        fontSize: 34,
        textAlign: "center",
        fontWeight: "bold",
        backgroundColor: "gray",
        color: "#ecefff"

    },
})

export default App;