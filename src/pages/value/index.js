import { useParams } from "react-router-dom";

export default function Value() {
    let params = useParams();
    return (
        <h1>
            value:{params.value}
        </h1>
    )
}