import vue from "vue";
import moment from "moment";

vue.filter("date", (input, format) => {
    return moment(input).format(format);
});
