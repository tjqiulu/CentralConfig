package com.gemalto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.statemachine.StateMachine;
import org.springframework.statemachine.config.StateMachineFactory;
import org.springframework.statemachine.persist.StateMachinePersister;

@SpringBootApplication
public class StateMachineApplication implements CommandLineRunner {

	ThreadLocal<StateMachine> stateMachineThreadLocal = new ThreadLocal<StateMachine>();

	public static void main(String[] args) {
		SpringApplication.run(StateMachineApplication.class, args);
	}

//	 @Autowired
//	 private StateMachine<States, Events> stateMachine;

	@Autowired
	@Qualifier("recruitStateMachineFactory")
	private StateMachineFactory<States, Events> stateMachineFactory;

	@Autowired
	private StateMachinePersister<States, Events, Recruit> persister;

	@Override
	public void run(String... args) throws Exception {

		Recruit recruit = new Recruit();
		StateMachine stateMachinet = getStateMachine(recruit);
		stateMachinet.sendEvent(Events.PAY);
		stateMachinet.sendEvent(Events.RECEIVE);
		//
//		 stateMachine.start();
//		 stateMachine.sendEvent(Events.PAY);
//		 stateMachine.sendEvent(Events.RECEIVE);
	}

	void sendEvent(Events events, Recruit recruit) {
		Message message = MessageBuilder.withPayload(events).setHeader("recruit", recruit).build();
		StateMachine stateMachine = getStateMachine(recruit);
		stateMachine.sendEvent(message);
	}

	private StateMachine getStateMachine(Recruit recruit) {
		StateMachine machine = stateMachineThreadLocal.get();
		if (null == machine) {
			machine = stateMachineFactory.getStateMachine("recruitStateMachineId");
		}
		try {
			machine.start();
			persister.restore(machine, recruit);
		} catch (Exception e) {
			// e.printStackTrace();
		}
		return machine;
	}

}
