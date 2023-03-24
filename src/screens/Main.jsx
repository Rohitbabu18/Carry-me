import { Pressable, StatusBar, Text } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userList } from '../redux/action'
import { SafeAreaView } from 'react-native-safe-area-context'
import Loader from '../util/Loader'
import styles from '../util/Styles'
import { FlatList } from 'react-native-gesture-handler'
import { Colors } from '../util/Colors'

const Main = ({ navigation }) => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.userData.list)
    const [loading, setLoading] = useState(false)
    const getData = useCallback(() => {
        setLoading(true)
        const url = "https://jsonplaceholder.typicode.com/users"
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch(url, requestOptions)
            .then(res => res.json())
            .then(result => {
                dispatch(userList(result))
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    }, [data])

    useEffect(() => {
        getData()
    }, [])
    const renderItem = ({ item, index }) => {
        return <Pressable
            onPress={() => {
                navigation.navigate('UserInfo', { data: item })
            }}
            style={styles.listContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
        </Pressable>
    }
    return (
        <SafeAreaView style={styles.container}>
            <Loader loading={loading} />
            <StatusBar backgroundColor={Colors.blue} barStyle='light-content' />
            <Text style={styles.headingText}>My Application</Text>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}

export default Main

