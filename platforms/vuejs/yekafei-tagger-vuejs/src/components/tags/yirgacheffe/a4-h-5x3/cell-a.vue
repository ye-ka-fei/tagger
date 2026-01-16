<template>
  <MyCellBox>

    <div class="tag-row">

      <img class="image-logo" src="/image/big_head_r512.svg" />

      <div class="tag-field tag-field-label"> {{ info.label }} </div>
    </div>

    <hr class="hbar" />

    <!-- <div class="tag-row">
      <div class="tag-field tag-field-slogan"> 来自山野的烟火气 </div>
    </div> -->

    <!-- <hr class="hbar" /> -->

    <div class="tag-row">
      <img class="image-dq-mark" src="/image/double_q_mark1.svg" />
      <div class="box box-v ">
        <hr class="hbar" />
        <div class="tag-field tag-field-flavour">
          {{ info.flavour }}
        </div>
      </div>
      <img class="image-dq-mark" src="/image/double_q_mark2.svg" />
    </div>

    <hr class="hbar" />


    <div class="tag-row">
      <div class="tag-field tag-field-country"> {{ info.country }} </div>
    </div>

    <div class="tag-row">
      <div class="tag-field tag-field-region"> {{ info.region }} </div>
    </div>


    <div class="tag-row">
      <div class="tag-field tag-field-variety"> {{ info.variety }} </div>
    </div>


    <div class="tag-row">
      <div class="tag-field tag-field-description">
        {{ info.process }}
        {{ info.grade }}

        净重:{{ info.weight }} </div>
    </div>

    <hr class="hbar" />

    <div class="tag-row">
      <img class="image-illustration" src="/image/view_of_yirgachefe.jpg" />
      <MyRoastDegree />
    </div>

  </MyCellBox>
</template>

<!----------------------------------------------------------------------------->

<script lang="js">

import MyRoastDegree from '@/components/widgets/roast/roast-degree-table.vue'
import MyCellBox from '@/components/sheets/a4/a4_horizontal_5x3/cell.vue'

export default {

  name: 'tags-yirgacheffe-a4-3x5-vert-a-cell',

  components: { MyRoastDegree, MyCellBox },

  props: {
    index: Number,
    name: String,
    label: String,

    info: Object,

  }

}


</script>

<!----------------------------------------------------------------------------->

<style scoped>
.box {
  margin: 0px;
  padding: 0px;
  display: flex;
}

.box-h {
  flex-direction: row;
}

.box-v {
  flex-direction: column;
}

.hbar {
  margin: 0.5mm;
  padding: 0px;
  border-color: black;
  border-style: solid;
  border-width: 0.3mm;
}

.tag-field {
  text-align: center;
  padding: 0px;
  margin: 0px;
  display: inline-block;

  line-height: 100%;

}

.tag-row {
  text-align: center;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  border-width: 0.2mm;
  border-style: solid;
  border-color: transparent;

  /* border-color: orange; */

}


.tag-field-label {
  font-size: 3mm;
  font-weight: 600;

  margin-left: 1mm;
  margin-top: 0.5mm;

  letter-spacing: 0.79mm;

}

.tag-field-slogan {
  font-size: 1.2mm;
  padding-left: 4.2mm;
  padding-top: 0.1mm;
  letter-spacing: 4.1mm;
  transform: scaleX(1.1);
}

.tag-field-flavour {
  font-size: 2.3mm;
  letter-spacing: 0.9mm;
  transform: scaleX(1);

  padding-left: 1mm;
  padding-top: 0.3mm;

}

.tag-field-country {
  font-size: 5mm;
  font-weight: 600;

  letter-spacing: 2.8mm;
  padding-left: 3mm;
  transform: scaleX(1.3);
}

.tag-field-region {
  font-size: 10mm;
  font-weight: 900;

  padding-left: 1.5mm;
  letter-spacing: 1.6mm;
  transform: scaleX(1.08);
}

.tag-field-variety {
  font-size: 3mm;

  transform: scaleX(1.05);
  padding-left: 0.8mm;
  letter-spacing: 0.7mm;

}


.tag-field-description {
  font-size: 3mm;

  transform: scaleX(1.05);
  padding-left: 0.8mm;
  letter-spacing: 1.5mm;

}

.tag-field-logo {

  /* width: 5mm;
  height: 5mm; */

  border-width: 0.5mm;
  border-style: dotted;
  border-color: red;
}


.mark-dq {
  border-width: 0.5mm;
  border-style: dotted;
  border-color: red;

  width: 5mm;
  height: 5mm;

}

.tag-field-illustration {

  width: 29mm;
  height: 15mm;

  border-width: 0.5mm;
  border-style: dotted;
  border-color: red;

}



.tag-row {
  display: flex;
  padding: 0mm;
  flex-direction: row;
}

.image-logo {
  max-height: 3mm;
  max-width: 3mm;
  padding-top: 0mm;
}

.image-dq-mark {
  max-height: 3.5mm;
  max-width: 5mm;
}

.image-illustration {
  max-height: 20mm;
  max-width: 25mm;

  margin-right: 1mm;
}
</style>
