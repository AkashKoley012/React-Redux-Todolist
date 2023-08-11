import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => {
        return state.users;
    });

    return (
        <Wrapper>
            {data.map((user, id) => (
                <li key={id}>
                    {user}
                    <button className="btn-delete" onClick={() => dispatch(removeUser(id))}>
                        <MdDeleteForever />
                    </button>
                </li>
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.section`
    li {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        border-bottom: 1px solid #eee;

        &:first-child {
            border-top: 1px solid #eee;
        }
    }

    .btn-delete {
        border: none;
        background-color: white;
        cursor: pointer;
        font-size: 2rem;
        color: red;
    }
`;

export default DisplayUsers;
