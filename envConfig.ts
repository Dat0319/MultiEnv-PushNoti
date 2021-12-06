import {NativeModules} from 'react-native';

const {EnvConfig} = NativeModules;

const NAME: 'dev' | 'staging' | 'prod' = EnvConfig?.ENV || 'dev';

interface ENVModel {
  NAME: typeof NAME;
}

const ENV: ENVModel = {
  NAME,
};

export default ENV;
