import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Text, TextInput, View} from 'react-native';
import {AccountStackParamList} from '../../Navigation/AccountStack';

type Props = NativeStackScreenProps<AccountStackParamList, 'EmailScreen'>;

export const EmailScreen = ({navigation}: Props) => {
  return (
    <View style={{margin: 20}}>
      <Text>Email</Text>
      <TextInput style={{backgroundColor: 'white'}} />
      <Button
        title="Continue"
        onPress={() => navigation.navigate('NameScreen')}
      />
    </View>
  );
};
