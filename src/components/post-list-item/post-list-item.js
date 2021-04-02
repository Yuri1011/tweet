import React, {Component} from "react";
import "./post-list-item.css";

export default class PostListItem extends Component {

    render() {
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;
        let className = 'app-list-item d-flex justify-content-between'

        if (important) {
            className += ' important';
        }

        if (like) {
            className += ' like';
        }
        return (
            <div className={className}>
            <span onClick={onToggleLiked} className={'app-list-item-label'}>
                {label}
            </span>
                <div className={'d-flex justify-content-center align-items-center'}>
                    <button
                        type={'submit'}
                        onClick={onToggleImportant}
                        className={'btn-star btn-sm'}>
                        <i className={'fa fa-star'}>
                        </i>
                    </button>
                    <button
                        type={'submit'}
                        onClick={onDelete}
                        className={'btn-trash btn-sm'}>
                        <i className={'fa fa-trash-o'}>
                        </i>
                    </button>
                    <i className={'fa fa-heart'}>
                    </i>
                </div>
            </div>
        )
    }
}
