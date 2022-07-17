import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {Headline, Provider as PaperProvider} from 'react-native-paper'
import BlogPost from './app/components/BlogPost';
import NavBar from './app/components/NavBar';
import {BlogScreen} from './app/screens/BlogScreen';
import Prueba from './app/screens/Prueba';

export default function App() {

  // const url = 'http://localhost:3000/api/v1/posts'
  // const [posts, setPosts] = useState()
  // const fetchApi = async ()=>{
  //   const response = await fetch(url)
  //   const responseJSON = await response.json()
  //   setPosts(responseJSON)
  // }
  // useEffect(() => {
  //   fetchApi()
  // }, [])
  //   return (
  //     <div className='App'>
  //         hola api
  //         <ul>
  //           {!posts ? 'cargando': posts.map( (post, index)=>{
  //               return <li>{post.title} y esta {post.id}</li>
  //             })
  //           }
  //         </ul>
  //     </div>
  //   )
  
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Headline style={styles.heading}> Hola mundo</Headline>
        <View>
          <div>emerson </div>
          <NavBar/>
          <BlogScreen/>
          <Prueba/>
        </View>

      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  heading: {
    color: '#000'
  }
});
