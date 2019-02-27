let data = [{
        id: '4',
        pid: '0'
    },
    {
        id: '5',
        pid: '0'
    },
    {
        id: '6',
        pid: '0'
    },
    {
        id: '7',
        pid: '0'
    },
    {
        id: '16',
        pid: '11'
    },
    {
        id: '17',
        pid: '11'
    },
    {
        id: '18',
        pid: '11'
    },
    {
        id: '19',
        pid: '11'
    },
    {
        id: '20',
        pid: '12'
    },
    {
        id: '14',
        pid: '5'
    },
    {
        id: '8',
        pid: '0'
    },
    {
        id: '9',
        pid: '0'
    },
    {
        id: '10',
        pid: '1'
    },
    {
        id: '0',
        pid: ''
    },
    {
        id: '1',
        pid: '0'
    },
    {
        id: '21',
        pid: '20'
    },
    {
        id: '22',
        pid: '21'
    },
    {
        id: '2',
        pid: '0'
    },
    {
        id: '3',
        pid: '0'
    },
    {
        id: '11',
        pid: '2'
    },
    {
        id: '12',
        pid: '3'
    },
    {
        id: '13',
        pid: '4'
    },
    {
        id: '15',
        pid: '6'
    },
    {
        id: '23',
        pid: '22'
    },
    {
        id: '24',
        pid: '23'
    },
    {
        id: '25',
        pid: '24'
    }
]

function ergodic(item, data) {
    let obj = {
        data: [],
        ok: false
    }
    const callback = (tree) => {
        tree = tree.map(ele => {
            if (ele.id === item.pid) {
                ele.children = ele.children || []
                ele.children.push(item)
                obj.ok = true
            }
            if (ele.children) {
                ele.children = callback(ele.children)
            }
            return ele
        })
        return tree
    }
    obj.data = callback(data)
    return obj
}
/**
 * @description 循环
 * @param { Array } data 
 */
function tree(data) {
    let _tree = []

    data.forEach(ele => {
        if (ele.pid === '') {
            _tree.push(ele)
        } else {
            return ele
        }
    })
    while (data.length !== 0) {
        data.forEach((ele, index) => {
            let obj = ergodic(ele, _tree)
            if (obj.ok) {
                _tree = obj.data
                data.splice(index, 1)
            } else {
                return ele
            }
        })
    }
    return _tree
}