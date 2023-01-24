import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  title: string;
  subtitle?: string;
  style?: any;
}

const Card: React.FC<Props> = ({ title, subtitle, style }) => {
  return (
    <View style={[styles.cardContainer, style]}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2EC331',
  },
  subtitle: {
    fontSize: 14,
    color: '#2EC331',
  },
});

export default Card;
