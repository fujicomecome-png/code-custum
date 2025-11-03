// custom.ts
// Minimal extension: On Start, On Chat command, Agent move and turn

namespace agentMinimal {
    /**
     * On start block (最初に一度だけ実行される)
     */
    //% block="on start"
    //% shim=pxtruntime::onStart
    export function onStart(handler: () => void): void {
        // shim を使ったイベントラッパー。MakeCode の on start を内部で登録する
    }

    /**
     * Chat command イベント（引数: コマンド文字列）
     */
    //% block="on chat command %cmd"
    //% cmd.defl="go"
    export function onChatCommand(cmd: string, handler: (args?: any) => void): void {
        // 実行時に player.onChat を登録する。プラットフォームの API 名が異なる場合は調整が必要。
        player.onChat(cmd, function (msg) {
            handler(msg);
        });
    }

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
    //% block="agent move %dir by %steps steps"
    //% steps.min=1 steps.max=100
    export function move(dir: MoveDirection, steps: number): void {
        switch (dir) {
            case MoveDirection.Forward: agent.move(SixDirection.Forward, steps); break;
            case MoveDirection.Back: agent.move(SixDirection.Back, steps); break;
            case MoveDirection.Up: agent.move(SixDirection.Up, steps); break;
            case MoveDirection.Down: agent.move(SixDirection.Down, steps); break;
        }
    }

    /**
     * Agent を回転させる（ラッパー）
     */
    //% block="agent turn %dir"
    export function turn(dir: TurnDirectionCustom): void {
        if (dir === TurnDirectionCustom.Left) agent.turn(TurnDirection.Left);
        else agent.turn(TurnDirection.Right);
    }
}
