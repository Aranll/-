let ec = (function() {
    let handle = function(obj) {
        //深拷贝对象
        this.obj = JSON.parse(JSON.stringify(obj));
        //记录要处理的步骤
        this.handleFnList = [];
    };
    handle.prototype = {
        /**
         * @description 设置保密信息
         */
        handleSetInfo(item) {
            for (let key in item) {
                if (item[key] === '') {
                    item[key] = '--';
                }
            }
            return this;
        },
        setInfo() {
            this.handleFnList.push('handleSetInfo');
            return this;
        },
        /**
         * @description 设置状态
         */
        handleSetStatus(item) {
            let _status = {
                0: '进行中',
                1: '已完成',
                2: '订单异常'
            }
            item.status = item.status.toString() ? _status[item.status] : ''
            return item;
        },
        setStatus() {
            this.handleFnList.push('handleSetStatus');
            return this;
        },
        /**
         * @description 设置时间
         */
        handleSetStartTime(item) {
            item.startTime = item.startTime.toString() ? new Date(item.startTime).toLocaleDateString().replace(/\//g, '-') : '';
            return item;
        },
        setStartTime() {
            this.handleFnList.push('handleSetStartTime');
            return this;
        },
        /**
         * @description 设置type
         */
        handleSetType(item) {
            let _type = {
                0: '普通用户',
                1: 'vip',
                2: '超级vip'
            }
            item.type = item.type.toString() ? _type[item.type] : '';
            return item;
        },
        setType() {
            this.handleFnList.push('handleSetType');
            return this;
        },
        /**
         * @description 返回处理结果
         * @return {Array|*}
         */
        end() {
            //统一处理操作
            this.obj.forEach(item => {
                this.handleFnList.forEach(fn => {
                    item = this[fn](item);
                })
            })
            return this.obj;
        }
    }
    //暴露构造函数接口
    return function(obj) {
        return new handle(obj);
    }
})();