let messages = []
let id = 0

module.exports = {
    create (req, res) {
        const {text, time} = req.body
        messages.push({id, text, time})
        id++
        res.status(200).send(messages)
    },
    read (req, res) {
        res.status(200).send(messages)
    },
    update (req, res) {
        const {text} = req.body
        const updatedMessageId = +req.params.id
        const messageIndex = messages.findIndex(message => message.id === updatedMessageId)
        let message = messages[messageIndex]

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }

        res.status(200).send(messages)
    },
    delete (req, res) {
        const {idToDelete} = req.params.id
        const deleteIndex = messages.findIndex(message => message.id === idToDelete)
        messages.splice(deleteIndex, 1)

        res.status(200).send(messages)

    }
}