namespace agentLimited {
    // 制限した方向列挙（公開する値だけ列挙）
    export enum MoveDirection {
        Forward = 0,
        Back = 1,
        Up = 2,
        Down = 3
    }

    export enum TurnDirectionCustom {
        Left = 0,
        Right = 1
    }

    /**
     * Agent を移動させる（ラッパー）
     */
    //% block="agent move %dir|by %steps steps"
    //% dir.fieldEditor="gridpicker" dir.fieldOptions.columns=2
    //% steps.min=1 steps.max=100
    export function move(dir: MoveDirection, steps: number): void {
        // MakeCode の組み込み agent API を呼ぶ
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
     * Agent を回転させる（ラッパー）
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