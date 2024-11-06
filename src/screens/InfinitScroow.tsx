import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import axios from "axios"

  
function feed(){
  const baseURL = './teste.json'
  const pages = 30

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(()=>{},[])

  async function loadApi(){
    if(loading) return
    setLoading(true)

    const response = await axios.get(`${baseURL}`)
  }

  return(
     <></>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  loading: {
    padding: 20,
  },
});

export default feed;
