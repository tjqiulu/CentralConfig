/**
 * Copyright (c) 2016 GEMALTO. All Rights Reserved.
 *
 * This software is the confidential and proprietary information of GEMALTO.
 * 
 * -------------------------------------------------------------------------
 * GEMALTO MAKES NO REPRESENTATIONS OR WARRANTIES ABOUT THE SUITABILITY OF
 * THE SOFTWARE, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE OR NON-INFRINGEMENT. GEMALTO SHALL NOT BE LIABLE FOR ANY
 * DAMAGES SUFFERED BY LICENSEE AS A RESULT OF USING, MODIFYING OR
 * DISTRIBUTING THIS SOFTWARE OR ITS DERIVATIVES.
 *
 * THIS SOFTWARE IS NOT DESIGNED OR INTENDED FOR USE OR RESALE AS ON-LINE
 * CONTROL EQUIPMENT IN HAZARDOUS ENVIRONMENTS REQUIRING FAIL-SAFE
 * PERFORMANCE, SUCH AS IN THE OPERATION OF NUCLEAR FACILITIES, AIRCRAFT
 * NAVIGATION OR COMMUNICATION SYSTEMS, AIR TRAFFIC CONTROL, DIRECT LIFE
 * SUPPORT MACHINES, OR WEAPONS SYSTEMS, IN WHICH THE FAILURE OF THE
 * SOFTWARE COULD LEAD DIRECTLY TO DEATH, PERSONAL INJURY, OR SEVERE
 * PHYSICAL OR ENVIRONMENTAL DAMAGE ("HIGH RISK ACTIVITIES"). GEMALTO
 * SPECIFICALLY DISCLAIMS ANY EXPRESS OR IMPLIED WARRANTY OF FITNESS FOR
 * HIGH RISK ACTIVITIES.
 */

package com.gemalto;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.Message;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.statemachine.annotation.OnTransition;
import org.springframework.statemachine.annotation.WithStateMachine;

/**
 * Class documentation to be filled
 * TODOC
 */
@WithStateMachine(name = "recruitStateMachineId")
@EnableAsync
public class EventConfig {
    private Logger logger = LoggerFactory.getLogger(getClass());
    
    @Async("taskExecutor")
    @OnTransition(target = "UNPAID")
    public void create(Message message) {
    	Recruit recruit = null;
    	if(null!=recruit)
    		recruit = (Recruit) message.getHeaders().get("recruit");
        logger.info("订单创建，待支付");
        logger.info("UNPAID:" +Thread.currentThread().toString());

    }
    
    @Async("taskExecutor")
    @OnTransition(source = "UNPAID", target = "WAITING_FOR_RECEIVE")
    public void pay1() {
        logger.info("用户完成支付，待收货");
        logger.info("WAITING_FOR_RECEIVE:" +Thread.currentThread().toString());
    }
    @Async("taskExecutor")
    @OnTransition(source = "WAITING_FOR_RECEIVE", target = "DONE")
    public void receive() {
        logger.info("用户已收货，订单完成");
        logger.info("DONE:" +Thread.currentThread().toString());
    }
}
