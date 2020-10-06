<template>
    <div class="contact">
        <div class="content">
            <ZSVG class="Z"/>
            <h2>{{$t("join.join")}}</h2>
            <p>{{$t("join.signup")}}</p>
            <div>
                <div id="mc_embed_signup">
                    <form action="https://zealanders.us18.list-manage.com/subscribe/post?u=650c97171069aef96d5eabcd2&amp;id=46183b6e88" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                        <input type="email" v-on:keyup.enter="submit" :placeholder="$t('join.your_email')" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_650c97171069aef96d5eabcd2_46183b6e88" tabindex="-1" value=""></div>
                    </form>
                </div>
            </div>
            <div class="email"><a href="mailto:hello@zelanders.vc">hello@zelanders.vc</a> <span>akl | nz</span></div>
        </div>
    </div>
</template>

<script>
import ZSVG from '@/assets/img/Z.svg';

export default {

	name: "Contact",
	props: ["mobile"],
	components: {
		ZSVG
	},
	methods: {
		submit() {
			document.getElementById('mc-embedded-subscribe-form').submit();
		}
	}
}
</script>

<style lang="less" scoped>
    .contact {
        background-color: #D9D9D9;
        background-image: url("../assets/img/mountain_bg.png");
        background-position: center bottom;
        background-repeat: no-repeat;
        background-size: cover;
        color: #252525;

        .mobile & {
            background-color: white;
            background-size: contain;
        }

        .Z {
            display: none;

            .mobile & {
                display: block;
                width: 42px;
                height: 42px;
                margin-bottom: 100px;
            }
        }

        .content {
            align-items: left;
            text-align: left;

            .mobile & {
                padding: 6vw;
                width: 100%;
                box-sizing: border-box;
            }
        }

        h2 {
            width: 600px;
            text-transform: uppercase;
            line-height: 1.1em;
            margin-bottom: 75px;

            .mobile & {
                width: auto;
                font-size: 2.4em;
            }
        }

        p {
            font-size: 2em;
            margin-bottom: 75px;

            .mobile & {
                font-size: 1.6em;
                line-height: 1.2em;
            }
        }

        input {
            width: 780px;
            background-color: transparent;
            border-width: 0 0 2px 0;
            border-color: #252525;
            text-transform: uppercase;
            font-size: 2em;
            letter-spacing: 0.1em;
            outline: none;
            padding-bottom: 35px;

            .mobile & {
                width: 100%;
                font-size: 1.2em;
                padding-bottom: 15px;
            }

            &::placeholder {
                opacity: 0.6;
            }
        }

        .email {
            margin-top: 25px;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 1.1em;
            letter-spacing: 0.2em;

            a {
                text-decoration: none;
                color: currentColor;
                margin-right: 40px;

            }

            .mobile & span {
                display: block;
            }
        }
    }
</style>