import { styled } from "styled-components";
import { clearAllUsers } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";

const DeleteAllUser = () => {
    const dispatch = useDispatch();
    return (
        <Wrapper>
            <button className="btn clear-btn" onClick={() => dispatch(clearAllUsers())}>
                Clear Users
            </button>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .clear-btn {
        text-transform: capitalize;
        background-color: #db338a;
        margin-top: 2rem;
    }
`;

export default DeleteAllUser;
