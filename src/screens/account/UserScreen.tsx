import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import {AccountStackParamList} from '../../Navigation/AccountStack';

type Props = NativeStackScreenProps<AccountStackParamList, 'UserScreen'>;

export const UserScreen = (_props: Props) => {
  return (
    <View style={{margin: 20}}>
      <Text>User</Text>
    </View>
  );
};
