/**
 * * So far we know that calling a generator doesn't execute it, instead it creates a new iterator that we can use to request value from the generator.
 * * A generator works almost like a small program, a state machine that moves between states:
 *  - @param Suspended_start --- When the generator is created, it starts in this state. None of the generator'code is executed.
 *  - @param Executing --- The state in which the code of the generator is executed. The execution continues either from the begining or from where the generator was last suspended. A generator moves to this state when the matching iterator's `next` method is called, and there exists code to be executed.
 *  - @param Suspended_yield --- During execution, when a generator reaches a yield expression, it creates a new obejct carrying the return value, yield it, and suspends its execution. This is the state in which the generator is paused and is waiting to continue its execution.
 *  - @param Completed --- If during execution the generator either runs into a return statement or runs out of code to execture, the generator moves into this state.
 */
