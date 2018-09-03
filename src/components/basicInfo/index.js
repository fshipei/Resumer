import React from 'react';

export default class BasicInfo extends React.PureComponent {
	constructor (props) {
		super(props);
		this.state = {
	      workItem: '',
	      personalProject: '',
	      skills: ''
	    };
	}

	renderProject(itemIndex) {
		
	    let projectElement = [];

	   	this.state.workItem[itemIndex].project.map((item, index) => {
	   		projectElement.push(
	   			<div className="project" key={index}>
			      <h4>
			        { item.name }
			        {item.sourceCode && <a href={item.sourceCode} target="_blank">{this.langBasicPrefix.sourceCode}</a>}
			        {item.demo && <a href={item.demo} target="_blank">Demo</a>}
			      </h4>
			      <p>{item.description}</p>
			      {item.previewImage && <img src={item.previewImage}/>}
			    </div>
	   		)
	   	})

	   	return projectElement;
	}

	renderItem(langBasicPrefix) {
		let companyElement = [];

	    let personProjectElement = [];
	    this.state.personalProject.map((item, index) => {
	    	personProjectElement.push(
	    		<div className="person-project" key={index}>
		           <h3>{ this.langBasicPrefix.personalProject }</h3>
		            <div className="project">
		              <h4>
		                { item.name }
		                {item.sourceCode && <a href={item.sourceCode} target="_blank">{ this.langBasicPrefix.sourceCode }</a>}
		                {item.demo && <a href={item.demo} target="_blank">Demo</a>}
		              </h4>
		              <p>{item.description}</p>
		              {item.previewImage && <img src={item.previewImage} />}
		            </div>
		        </div>
	    	)
	    })

	    let skillElement = [];
	    this.state.skills.forEach((item, index) => {
	    	skillElement.push(
		            <li key={index}>
		              <h4>{ item.name }</h4>
		              <p>{item.description}</p>
		              <p className="abandon" >{ item.abandoned }</p>
		            </li>
	    	)
	    })


		this.state.workItem.map((company, index) => {
		    companyElement.push(
		        <div className="company" key={index}>
		          <h3>
		            <img src={company.companyLogo} />
		            {company.companyName}（{ company.startDate } - { company.endDate === '' || company.endDate === 'present' ? langBasicPrefix.present : company.endDate }）
		          </h3>
		          {this.renderProject(index)}
		        </div>
		   	)
		})

		return (
			<div>
				<h2>
		            <i className="iconfont icon-project"></i>
		            { langBasicPrefix.workExperience }
		        </h2>
				{companyElement}
				{personProjectElement}
				<div className="part">
		          <h2>
		            <i className="iconfont icon-icskill"></i>
		            { this.langBasicPrefix.skill }
		          </h2>
		          <ul className="project">
		          	{skillElement}
		          </ul>
		        </div>
			</div>
		)
	}

	render() {
		let infoTitleElement = null;
		let infoContentElement = null;

		const data = this.props.data;
		const {basicInfo, workExperience, personalProject, skills} = data;
		const langBasicPrefix = this.langBasicPrefix = this.props.lang.basicInfo;

		this.state.workItem = workExperience;
		this.state.personalProject = personalProject;
		this.state.skills = skills;

		if (data) {
			infoTitleElement = (
				<h2>
		            <i className="iconfont icon-Workordercenter-fi-copy"></i>
		            {basicInfo.name}
		        </h2>
		    );

		    infoContentElement = (
		    	<ul className="info">
		            <li><span>{langBasicPrefix.name}：</span>{basicInfo.name} / {basicInfo.gender}</li>
		            {basicInfo.birthday && <li><span>{langBasicPrefix.birthday}：</span>{basicInfo.birthday}</li>}
		            <li><span>{langBasicPrefix.school}：</span>{ basicInfo.school }</li>
		            <li><span>{ langBasicPrefix.major}：</span>{ basicInfo.major }</li>
		            <li><span>{ langBasicPrefix.blog}：</span><a href="basicInfo.blog" target="_blank">{ basicInfo.blog }</a></li>
		            <li><span>Github：</span><a href="basicInfo.github" target="_blank">{ basicInfo.github }</a></li>
		        </ul>
		    )
		}

		return (
			<div id="main">
		        <div className="part">
		          {infoTitleElement}
		          {infoContentElement}
		        </div>
		        <div className="part">
		          {this.renderItem(this.langBasicPrefix)}
		        </div>
		    </div>
        );
	}

}