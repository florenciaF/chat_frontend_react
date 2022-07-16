import { useParams } from 'react-router-dom'

export const Chat = () => {
    const params = useParams()
    return (
        <div>
            { params.id }
        </div>
    )
}
