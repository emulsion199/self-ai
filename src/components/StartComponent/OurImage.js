
const name=[
    "","Joel","Changho","Jaewon","Dongju"
]
const role=[
    "",'AI developer','AI developer','AI developer','AI developer'
]
const desc=[
    '',
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit velit ollivelit molli veli. lit non deserunt lor do amet sint se',
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit velit ollivelit molli veli. lit non deserunt lor do amet sint se',
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit velit ollivelit molli veli. lit non deserunt lor do amet sint se',

]
const css={
    ellipse:{   
        width:'300px',
        height:'200px',
        borderRadius: '100%',
        transform: 'rotate(-45deg)',
        border: '1px solid black',
    },
    image:{
        height:'400px',
        width:'800px',
        //borderRadius: '100%',
    },
    name:{
        fontSize:'100px',
        left:'200px',
        top:'200px',
    },
    role:
    {
        fontSize:'20px',
        left:'200px',
        top:'180px',
        textAlign: 'center',
    },
    desc:
    {
        marginTop:'50px',
        fontSize:'20px',
        marginLeft:'30px',
    },
}
const OurImage=(args)=>
{
    const type= args.type
    return(
        <div>
       
 
                <div>
                    {/*<div style={css.ellipse}> </div>*/}
                    <img style={css.image} src={require('../../image/'+type+'_temp.png').default}></img>
                </div>
                
        </div>
    )
}
export default OurImage