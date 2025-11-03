// custom.ts
// Minimal wrapper extension that exposes only agent.move and agent.turn blocks
// Namespace name controls the category shown in the MakeCode toolbox

namespace agentLimited {
    /**
     * Move directions exposed to block editor
     */
    export enum MoveDirection {
        Forward = 0,
        Back = 1,
        Up = 2,
        Down = 3
    }

    /**
     * Turn directions exposed to block editor
     */
    export enum TurnDirectionCustom {
        Left = 0,
        Right = 1
    }

    /**
     * Move the Agent a number of steps in a chosen direction
     */
    //% block="agent move %dir by %steps steps"
    //% dir.fieldEditor="gridpicker" dir.fieldOptions.columns=2
    //% steps.min=1 steps.max=100
    export function move(dir: MoveDirection, steps: number): void {
        // Use the platform-provided agent API. If identifiers differ on your target,
        // adjust SixDirection.* to the correct enum names observed in your MakeCode target.
        switch (dir) {
            case MoveDirection.Forward:
                agent.move(SixDirection.Forward, steps);
                break;
            case MoveDirection.Back:
                agent.move(SixDirection.Back, steps);
                break;
            case MoveDirection.Up:
                agent.move(SixDirection.Up, steps);
                break;
            case MoveDirection.Down:
                agent.move(SixDirection.Down, steps);
                break;
        }
    }

    /**
     * Turn the Agent left or right
     */
    //% block="agent turn %dir"
    //% dir.fieldEditor="gridpicker"
    export function turn(dir: TurnDirectionCustom): void {
        if (dir === TurnDirectionCustom.Left) {
            agent.turn(TurnDirection.Left);
        } else {
            agent.turn(TurnDirection.Right);
        }
    }
}
