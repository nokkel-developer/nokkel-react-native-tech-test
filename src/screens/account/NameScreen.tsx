import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Text, TextInput, View} from 'react-native';
import {AccountStackParamList} from '../../Navigation/AccountStack';

type Props = NativeStackScreenProps<AccountStackParamList, 'NameScreen'>;

export const NameScreen = ({navigation}: Props) => {
  return (
    <View style={{margin: 20}}>
      <Text>Name</Text>
      <TextInput style={{backgroundColor: 'white'}} />
      <Button
        title="Continue"
        onPress={() => navigation.navigate('EmailScreen')}
      />
    </View>
  );
};
