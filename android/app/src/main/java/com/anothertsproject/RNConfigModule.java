package com.anothertsproject; // replace com.your-app-name with your app’s name

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

import java.util.Map;
import java.util.HashMap;

import com.anothertsproject.BuildConfig;


public class RNConfigModule extends ReactContextBaseJavaModule {

   RNConfigModule(ReactApplicationContext context) {
       super(context);
   }

   @Override
   public String getName() {
       return "RNConfig";
   }

   @Override
   public Map<String, Object> getConstants() {
       final Map<String, Object> constants = new HashMap<>();
       constants.put("ENV", BuildConfig.ENV);
       return constants;
   }
}