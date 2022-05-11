import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'
import { COMMENTS } from "../shared/comments";

function Dishdetail(props) {

    function renderDish(dish) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>

        );

    }

    function renderComment(comm) {
        const comments = comm.map((com) => {
            return (
                <ul className="list-unstyled">
                    <li>
                        <p>-- {com.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(com.date)))}</p>
                    </li>
                    <li>
                        <p>{com.comment}</p>
                    </li>


                </ul>

            );
            
        })
        return comments;
    }

    const commentArr = COMMENTS.filter((com) => com.dishId === props.dishes.id)
    if (props.dishes != null) {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {renderDish(props.dishes)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {renderComment(commentArr)}
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }

}
export default Dishdetail;