const webPartMember = [{name : '서히', type:'OB'}, {name : '냥냥', type:'OB'}, {name : '뉴뉴', type:'YB'}, {name : '난나', type :'YB'}];

//필터되는 조건을 직접 구현
const isOBMember = (info) => {
    return info.type === 'OB';
}
const isYBMember = (info) => {
    return info.type === 'YB';
}

const OBMember = webPartMember.filter(isOBMember);
const YBMember = webPartMember.filter(isYBMember);