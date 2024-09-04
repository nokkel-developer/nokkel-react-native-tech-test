import {Button, Text, TextInput, View} from 'react-native';
import {AccountStackParamList} from '../../Navigation/AccountStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<AccountStackParamList, 'AgeScreen'>;

export const AgeScreen = ({navigation}: Props) => {
  return (
    <View style={{margin: 30}}>
      <Text>Age</Text>
      <TextInput style={{backgroundColor: 'white'}} />
      <Button title="Continue" />
    </View>
  );
};
