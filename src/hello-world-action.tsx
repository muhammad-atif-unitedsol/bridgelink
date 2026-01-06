import type {App} from "attio"
import {showDialog} from "attio/client"

import {HelloWorldDialog} from "./hello-world-dialog"

export const helloWorldAction: App.Record.Action = {
    id: "bridgelink",
    label: "Bridgelink",
    onTrigger: async ({recordId}) => {
        showDialog({
            title: "Bridgelink",
            Dialog: () => {
                // This is a React component. It can use hooks and render other components.
                return <HelloWorldDialog recordId={recordId} />
            },
        })
    },
}
