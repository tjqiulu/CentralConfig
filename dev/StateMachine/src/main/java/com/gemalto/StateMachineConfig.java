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

import java.util.EnumSet;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.statemachine.StateMachineContext;
import org.springframework.statemachine.StateMachinePersist;
import org.springframework.statemachine.config.EnableStateMachine;
import org.springframework.statemachine.config.EnableStateMachineFactory;
import org.springframework.statemachine.config.EnumStateMachineConfigurerAdapter;
import org.springframework.statemachine.config.builders.StateMachineStateConfigurer;
import org.springframework.statemachine.config.builders.StateMachineTransitionConfigurer;
import org.springframework.statemachine.persist.DefaultStateMachinePersister;
import org.springframework.statemachine.persist.StateMachinePersister;
import org.springframework.statemachine.support.DefaultStateMachineContext;

/**
 * Class documentation to be filled TODOC
 */
@Configuration
//@EnableStateMachine
@Scope("prototype")
@EnableStateMachineFactory(name = "recruitStateMachineFactory")
public class StateMachineConfig extends EnumStateMachineConfigurerAdapter<States, Events> {
	private Logger logger = LoggerFactory.getLogger(getClass());
	public static final String orderStateMachineId = "recruitStateMachineId";

	// configuration all states and initial state
	@Override
	public void configure(StateMachineStateConfigurer<States, Events> states) throws Exception {
		logger.info("config 1");
		states.withStates().initial(States.UNPAID).states(EnumSet.allOf(States.class));
	}

	// configuration all states action
	@Override
	public void configure(StateMachineTransitionConfigurer<States, Events> transitions) throws Exception {
		logger.info("config 2");
		transitions.withExternal().source(States.UNPAID).target(States.WAITING_FOR_RECEIVE).event(Events.PAY)
					.and()
					.withExternal().source(States.WAITING_FOR_RECEIVE).target(States.DONE).event(Events.RECEIVE);
	}

	@Bean
	public StateMachinePersister<States, Events, Recruit> persister() {
		return new DefaultStateMachinePersister<States, Events, Recruit>(
				new StateMachinePersist<States, Events, Recruit>() {
					@Override
					public void write(StateMachineContext<States, Events> context, Recruit order) throws Exception {
						// 此处并没有进行持久化操作
						 order.setStatus(context.getState());
					}

					@Override
					public StateMachineContext<States, Events> read(Recruit order) throws Exception {
						// 此处直接获取order中的状态，其实并没有进行持久化读取操作
						StateMachineContext<States, Events> result = new DefaultStateMachineContext<States, Events>(
								order.getStates(), null, null, null, null, orderStateMachineId);
						return result;
					}
				});
	}

	// configuration listener of state machine
	/*
	 * @Override public void configure(StateMachineConfigurationConfigurer<States,
	 * Events> config) throws Exception { config .withConfiguration()
	 * .listener(listener()); }
	 * 
	 * // define a bean for the listener
	 * 
	 * @Bean public StateMachineListener<States, Events> listener() { return new
	 * StateMachineListenerAdapter<States, Events>() {
	 * 
	 * @Override public void transition(Transition<States, Events> transition) {
	 * if(transition.getTarget().getId() == States.UNPAID) {
	 * logger.info("订单创建，待支付"); return; } if(transition.getSource().getId() ==
	 * States.UNPAID && transition.getTarget().getId() ==
	 * States.WAITING_FOR_RECEIVE) { logger.info("用户完成支付，待收货"); return; }
	 * if(transition.getSource().getId() == States.WAITING_FOR_RECEIVE &&
	 * transition.getTarget().getId() == States.DONE) { logger.info("用户已收货，订单完成");
	 * return; } } }; }
	 */
}
