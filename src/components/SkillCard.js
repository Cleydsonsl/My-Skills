import React from 'react';

import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export function SkillCard({ skill }){
  return(
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>
        {skill}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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
