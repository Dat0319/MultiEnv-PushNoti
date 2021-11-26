import {NativeModules} from 'react-native';

const {EnvConfig} = NativeModules;

const NAME: 'dev' | 'staging' | 'prod' = EnvConfig?.ENV || 'dev';
// Alert.alert(EnvConfig?.ENV);
// Alert.alert(NAME);
interface ENVModel {
  NAME: typeof NAME;
}

const ENV: ENVModel = {
  NAME,
};

export default ENV;
