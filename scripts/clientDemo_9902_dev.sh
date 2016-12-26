#!/bin/sh
start(){  
     now=`date "+%Y%m%d%H%M%S"`  
     exec java -Xms256m -Xmx512m -Dserver.port=9902 -Dspring.profiles.active=dev -jar ./installers/clientDemo-0.0.1-SNAPSHOT.jar 5 >log/"$now"_DEMO_9902.log &
}  
stop(){  
     ps -ef|grep server.port=9902|awk '{print $2}'|while read pid    
     do  
        kill -9 $pid  
     done  
}  
      
case "$1" in  
start)  
start  
;;  
stop)  
stop  
;;  
restart)  
stop  
start  
;;  
*)  
printf 'Usage: %s {start|stop|restart}\n' "$prog"  
exit 1  
;;  
esac  
