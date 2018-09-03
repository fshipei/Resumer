import React from 'react';

export default class SideBar extends React.PureComponent {
	constructor (props) {
		super(props);
	}

	render() {
		let mainElement = null;

		const data = this.props.data;
		const {basicInfo,  contact} = data;
		const langBasicPrefix = this.props.lang;

		if (data) {

		    mainElement = (
		    	<div className="sidebar">
			        <div className="avatar-wrap">
			          <img src={ basicInfo.avatar} />
			          <h1>{ basicInfo.name }</h1>
			          <p className="desc">{ basicInfo.desc }</p>
			        </div>
			        <div className="side-li">
			          <i className="iconfont icon-tag"></i>
			          <div>
			            <h2>{ langBasicPrefix.contactTitle}</h2>
			            <ul>
			              <li>
			                <i className="iconfont icon-tel"></i>
			                <span>{ langBasicPrefix.contact.tel }：{ contact.tel }</span>
			              </li>
			              <li>
			                <i className="iconfont icon-email"></i>
			                <span>
			                  { langBasicPrefix.contact.email }：
			                  <a href="'mailto:' + contact.email" target="_blank">{ contact.email }</a>
			                </span>
			              </li>
			              <li>
			                <i className="iconfont icon-wechat1"></i>
			                <span>{ langBasicPrefix.contact.wechat }：{ contact.wechat }</span>
			              </li>
			              <li>
			                <i className="iconfont icon-QQ"></i>
			                <span>QQ：{ contact.qq }</span>
			              </li>
			              <li>
			                <i className="iconfont icon-telegram1"></i>
			                <span>Telegram：<a href="'https://t.me/' + contact.telegram" target="_blank">{ contact.telegram }</a></span>
			              </li>
			            </ul>
			          </div>
			        </div>
			        <div className="side-li">
			          <i className="iconfont icon-tag"></i>
			          <div>
			            <h2>{ langBasicPrefix.application }</h2>
			            <span>{ data.application }</span>
			          </div>
			        </div>
		        </div>
		    )
		}

		return (
		    mainElement
        );
	}

}