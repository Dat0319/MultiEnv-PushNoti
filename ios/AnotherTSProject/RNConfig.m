#import "RNConfig.h"

#import <React/RCTBridge.h>
#import <React/RCTEventDispatcher.h>

@implementation RNConfig
@synthesize bridge = _bridge;

RCT_EXPORT_MODULE();

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

- (NSDictionary *)constantsToExport
{
#if DEV
  NSString *env = @"dev";
#elif STAGING
  NSString *env = @"staging";
#else
  NSString *env = @"prod";
#endif
  
  return @{ @"ENV": env };
}
@end
