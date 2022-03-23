import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Platform, TouchableOpacity } from 'react-native';

export function Home(){
  const [ newSkill, setNewSkill ] = useState('');
  const [ mySkills, setMySkills ] = useState([]);

  function handleAddNewSkill() {
    setMySkills(oldSkills => [...oldSkills, newSkill]);
  }

  return (
    <View style={styles.Container}>
      <Text style={styles.title}>Welcome, Cleydson</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor='#555'
        onChangeText={setNewSkill}
      />
      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.8}
        onPress={handleAddNewSkill}
      >
        <Text style={styles.buttonText}>
          Add
        </Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>

      {
        mySkills.map(skill => (
          <TouchableOpacity key={skill} style={styles.buttonSkill}>
            <Text style={styles.textSkill}>
              {skill}
            </Text>
          </TouchableOpacity>
        ))
        
      }
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
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  },
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 10
  },
  textSkill: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }

})