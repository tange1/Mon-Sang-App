<template>
    <q-page padding class="start">
        <div id="q-app">
            <q-card class="link-card">
                <q-card-section class="card-title">Wichtige Informationen vor der Blutspende:</q-card-section>

                <q-item>
                    <q-item-section>
                        <q-item-label>Alkohol</q-item-label>
                        <q-item-label caption lines="3">Am Abend vor der Spende sollte auf
                            Alkoholgenuß verzichtet werden.</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-icon name="liquor" color="primary" />
                    </q-item-section>

                </q-item>

                <q-separator spaced inset />

                <q-item>
                    <q-item-section>
                        <q-item-label>Essen</q-item-label>
                        <q-item-label caption lines="3">Komme nicht zur Spende, ohne vorher etwas
                            gegessen zu haben. Vermeide schon einen Tag vor der Spende stark
                            fetthaltige Speisen.</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-icon name="lunch_dining" color="primary" />
                    </q-item-section>
                </q-item>

                <q-separator spaced inset />

                <q-item>
                    <q-item-section>
                        <q-item-label>Trinken</q-item-label>
                        <q-item-label caption lines="3">Nimm vor der Spende
                            reichlich Flüssigkeit zu dir.</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-icon name="local_drink" color="primary" />
                    </q-item-section>
                </q-item>

                <q-separator spaced inset />


                <q-item>
                    <q-item-section>
                        <q-item-label>Wohlbefinden</q-item-label>
                        <q-item-label caption lines="3">Kommen Sie nur zur Blutspende, wenn Sie sich völlig
                            wohl fühlen!</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-icon name="self_improvement" color="primary" />
                    </q-item-section>
                </q-item>

                <!--q-separator spaced inset />





                            <q-item>
                                <q-item-section>
                                    <q-item-label>Essen</q-item-label>
                                    <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet,
                                        consectetur adipiscit elit.</q-item-label>
                                </q-item-section>

                                <q-item-section side top>
                                    <q-item-label caption>Voted!</q-item-label>
                                </q-item-section>
                            </q-item>

                            <q-separator spaced inset />

                            <q-item>
                                <q-item-section>
                                    <q-item-label>Single line item</q-item-label>
                                    <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet,
                                        consectetur adipiscit elit.</q-item-label>
                                </q-item-section>

                                <q-item-section side top>
                                    <q-badge color="teal" label="10k" />
                                </q-item-section>
                            </q-item>

                            <q-separator spaced inset />

                            <q-item>
                                <q-item-section>
                                    <q-item-label>Single line item</q-item-label>
                                    <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet,
                                        consectetur adipiscit elit.</q-item-label>
                                </q-item-section>

                                <q-item-section side top>
                                    <q-item-label caption>2 min ago</q-item-label>
                                    <div class="text-orange">
                                        <q-icon name="star" />
                                        <q-icon name="star" />
                                        <q-icon name="star" />
                                    </div>
                                </q-item-section>
                            </q-item>

                            <q-separator spaced inset />

                            <q-item>
                                <q-item-section>
                                    <q-item-label>Single line item</q-item-label>
                                    <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet,
                                        consectetur adipiscit elit.</q-item-label>
                                </q-item-section>

                                <q-item-section side top>
                                    <q-item-label caption>meta</q-item-label>
                                </q-item-section>
                            </q-item-->








            </q-card>

        </div>


    </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PageIndex',
    el: '#q-app',
    data() {
        return {
            autoplay: true,
            slide: 'first',
            fullscreen: false,
        }
    }
});
</script>

<style>
.start {
    margin-top: 0pt;
}
</style>
