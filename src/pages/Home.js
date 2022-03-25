import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Platform, 
  FlatList, 
  StatusBar 
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home(){
  const [ newSkill, setNewSkill ] = useState('');
  const [ mySkills, setMySkills ] = useState([]);

  function handleAddNewSkill() {
    setMySkills(oldSkills => [...oldSkills, newSkill]);
  }

  return (
    <View style={styles.Container}>
      <StatusBar barStyle='light-content'/>
      <Text style={styles.title}>Welcome, Cleydson</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor='#555'
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill}/>

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>

      <FlatList 
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <SkillCard skill={item}/>
        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1, 
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 70

  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 12,
    borderRadius: 10
  },
})